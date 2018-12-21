import React, {Component} from 'react'
import firebase from 'firebase';
import { translate } from 'react-i18next';
import config from "../../config";
// Custom components.

import 'react-toastify/dist/ReactToastify.css';
import {
  getCurrentUser,
  setCurrentUser,
  getCustomToken,
  setCustomToken,
  setDiffTime,
  setQuestionCount, parseQuery, jsonToQueryString, getCurrentTimestamp
} from "../../utils/helper";
import WinnersPage from '../WinnersPage';
import Connecting from '../../components/Connecting';

// Initialize firebase.
const cnf = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  databaseURL: config.firebaseDatabaseUrl,
};
firebase.initializeApp(cnf);
const database = firebase.database();

let oscDataRef;
let oscPresenceRef;
let oscQuizWinnersRef;

class Home extends Component {

  constructor() {
    super();

    this.state = {
      isAuthenticated: true,
      currentUser: false,
      lang: 'en',
      oscQuizStatus: false,
      oscData: false,
      oscQuizWinners: false,
      oscPresence: false,
      showRecentWinners: false,
      prevQuizStatus: QUIZ_FINISH,
      oscQuizStatusUuid: false,
      queryParams: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, false);
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return null
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.receiveMessage, false);
  }

  authToFirebase = () => {
    // Set language.
    const { i18n } = this.props;
    i18n.changeLanguage(this.state.lang);

    this.getCustomToken();
  };

  receiveMessage = (event) => {
    const data = parseQuery(event.data);

    if (data.userid === undefined || data.userid === '') {
      console.log("userid can't be empty!");
      return
    }

    if (data.username === undefined || data.username === '') {
      console.log("username can't be empty!");
      return
    }

    if (data.avatar === undefined || data.avatar === '') {
      console.log("avatar can't be empty!");
      return
    }

    if (data.premium === undefined || data.premium === '') {
      console.log("premium can't be empty!");
      return
    }

    if (data.langcode === undefined || data.langcode === '') {
      console.log("langcode can't be empty!");
      return
    }

    console.log('queryParams:', data);

    this.setState({queryParams: data, lang: data.langcode}, () => {
      this.authToFirebase();
    })
  };

  /**
   * Get custom token from firebase cloud function.
   */
  getCustomToken() {

    console.log('get custom token...');

    const queryStr = jsonToQueryString(this.state.queryParams);
    const url = API_URL + 'auth' + queryStr;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (data['customToken']) {
          setCustomToken(data['customToken']);
          delete data['customToken'];
          setCurrentUser(data);
          this.authenticate();
        }
      });
  }

  /**
   * Authenticate firebase with custom token.
   */
  authenticate () {
    const token = getCustomToken();
    const __this = this;

    console.log('authenticate...');

    firebase.auth().signInWithCustomToken(token)
      .then(function(result) {
        __this.setState({isAuthenticated: true});
        __this.serverTime();

        __this.readOscQuizStatus();
        // __this.enjectFakeData(); // TODO:remove for production.
        __this.readOwner();

      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`authentication error: ${errorCode} - ${errorMessage}`);
        __this.getCustomToken();
    });
  };

  /**
   * FAKE DATA for DEBUG.
   */


  readOwner() {
    const __this = this;
    const user = getCurrentUser();
    const ref = database.ref(`osc-users/${user.uId}`);
    ref.on('value', function(snapshot){
      const oscUser = snapshot.val();
      oscUser.uId = user.uId;
      __this.setState({currentUser: oscUser})
      setCurrentUser(oscUser);
    })
  }

  /**
   * Read /osc-quiz-status/[lang]
   */
  readOscQuizStatus() {
    const __this = this;
    const ref = database.ref('osc-quiz-status/' + this.state.lang);
    ref.on('value', function (snapshot) {
      const oscQuizStatus = snapshot.val();
      if (oscQuizStatus) {
        const uuid = oscQuizStatus.uuid;
        if (uuid) {
          __this.setState({oscQuizStatus, prevQuizStatus: __this.state.oscQuizStatus.status, oscQuizStatusUuid: uuid}, () => {
            __this.readOscData();
            __this.readOscPresence();
            __this.readOscQuizWinners();
          });
        } else {
          __this.setState({oscQuizStatus, prevQuizStatus: __this.state.oscQuizStatus.status});
        }

      } else {
        __this.setState({oscQuizStatus});
      }

    })
  }

  /**
   * Read /osc-data/[quiz-uuid]/[lang]
   */
  readOscData() {

    console.log("read osc data");

    if (oscDataRef) {
      oscDataRef.off();
    }

    const __this = this;
    oscDataRef = database.ref(`osc-data/${this.state.oscQuizStatusUuid}/${this.state.lang}`);
    oscDataRef.on('value', function (snapshot) {
      const oscData = snapshot.val();
      console.log('oscData: ', oscData, 'time: ', getCurrentTimestamp());
      if ( oscData !== null ) {
        __this.setState({oscData})
      }
    })
  }

  /**
   * Read /osc-quiz-winners/[quiz-uuid]
   */
  readOscQuizWinners() {
    const __this = this;

    if (oscQuizWinnersRef) {
      oscQuizWinnersRef.off();
    }

    oscQuizWinnersRef = database.ref(`osc-quiz-winners/${this.state.oscQuizStatusUuid}`);
    oscQuizWinnersRef.on('value', function (snapshot) {
      const oscQuizWinners = snapshot.val();
      __this.setState({oscQuizWinners})
    })
  }

  readOscPresence() {
    const __this = this;

    if (oscPresenceRef) {
      oscPresenceRef.off();
    }

    const user = getCurrentUser();

    oscPresenceRef = database.ref(`osc-presence/${this.state.oscQuizStatusUuid}/${user.uId}`);
    oscPresenceRef.on('value', function (snapshot) {
      const oscPresence = snapshot.val();
      __this.setState({oscPresence})
    })
  }

  selectAnswer = (selectedAnswer, questionUuid) => {
    const user = getCurrentUser();

    const ref = database.ref(`osc-quiz-answers/${this.state.oscQuizStatusUuid}/${questionUuid}/${user.uId}`)
    ref.set({id_answer: selectedAnswer});
  };

  useFreebies = () => {
    const user = getCurrentUser();
    user.freebie = user.freebie - 1;

    const ref = database.ref(`osc-users/${user.uId}/freebie`);
    ref.transaction(function(current) {
      return (current || 1) - 1;
    });
  };

  showRecentWinners = () => {
    this.setState({showRecentWinners: true})
  };

  setOscPresence = () => {
    const user = getCurrentUser();
    const ref = database.ref(`osc-presence/${this.state.oscQuizStatusUuid}/${user.uId}`);
    ref.set(true);
  };

  serverTime() {
    const user = getCurrentUser();
    database.ref(`osc-users/${user.uId}/currentTime/`).update({time: firebase.database.ServerValue.TIMESTAMP})
    .then(function (data) {
      database.ref(`osc-users/${user.uId}/currentTime/`).once('value')
      .then(function (data) {
        const fbTime = data.val()['time'];
        const now = Date.now();
        const diffTime = fbTime - now;
        setDiffTime(diffTime);
      }, function serverTimeErr(err) {
        console.log('could not reach to the server time !');
        setDiffTime(0);
      });
    }, function (err) {
      console.log ('set time error:', err);
      setDiffTime(0);
    });
  }

  checkPrized() {
    const { oscQuizWinners, oscQuizStatus } = this.state;

    setQuestionCount(oscQuizStatus.nQ);

    if(oscQuizStatus.status !== QUIZ_FINISH) {
      return false
    }

    const currentUser = getCurrentUser();
    if(oscQuizWinners) {
      const uIds = Object.keys(oscQuizWinners);
      return uIds.includes(currentUser.uId);
    }
  }

  /* Render page. */
  render() {
    console.log("tttt",oscQuizStatus);

    const { currentUser, oscQuizStatus, oscData, oscQuizWinners, showRecentWinners, queryParams } = this.state;
    if (queryParams === false) return null;
    console.log("wwqwinners====",oscQuizWinners);




    if (oscQuizStatus) {

      if( oscQuizStatus.status === QUIZ_NOWINNER ) return <NoWinnerPage/>

      if( showRecentWinners ) {

        return <WinnersPage winners={oscQuizWinners}/>

      } else {
        switch (oscQuizStatus.status) {
          case QUIZ_PREVIEW:
         

          case QUIZ_RUN:


          case QUIZ_FINISH:

          default:
            return null
        }
      }
    } else {
      return <Connecting/>
    }
  }
}

export default translate('translations')(Home)