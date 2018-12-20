import {CURRENT_USER, CUSTOM_TOKEN, DIFF_TIME, QUESTION_COUNT, TOKEN_PARAMETER} from "../containers/Home/constants";
import moment from 'moment';

export function getParameterByName(name) {
  let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function getCustomToken() {
  return localStorage.getItem(CUSTOM_TOKEN)
}

export function setCustomToken(token) {
  localStorage.setItem(CUSTOM_TOKEN, token);
}

export function getTokenParameter() {
  return localStorage.getItem(TOKEN_PARAMETER)
}

export function setTokenParameter(token) {
  localStorage.setItem(TOKEN_PARAMETER, token);
}

export function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER, JSON.stringify(user));
}

export function getCurrentUser() {
  const userString = localStorage.getItem(CURRENT_USER);
  if (CURRENT_USER) {
    return JSON.parse(userString);
  } else {
    return false
  }
}

export function isLanguageCode(code) {
  const regex = /^(aa|ab|ae|af|ak|am|an|ar|as|av|ay|az|az|ba|be|bg|bh|bi|bm|bn|bo|br|bs|ca|ce|ch|co|cr|cs|cu|cv|cy|da|de|dv|dz|ee|el|en|eo|es|et|eu|fa|ff|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|ho|hr|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|io|is|it|iu|ja|jv|ka|kg|ki|kj|kk|kl|km|kn|ko|kr|ks|ku|kv|kw|ky|la|lb|lg|li|ln|lo|lt|lu|lv|mg|mh|mi|mk|ml|mn|mr|ms|mt|my|na|nb|nd|ne|ng|nl|nn|no|nr|nv|ny|oc|oj|om|or|os|pa|pi|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sc|sd|se|sg|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)$/i
  const found = code.match(regex);
  return found !== null;
}

export function getRemainingTimeStr(to) {
  const a = moment(to);
  const now = parseInt(Date.now(), 10) + parseInt(getDiffTime(), 10);
  const b = moment(now);

  const h = a.diff(b, 'hours');
  const m = a.diff(b, 'minutes') % 60;
  const s = a.diff(b, 'seconds') - a.diff(b, 'minutes') * 60;

  return {hours: pad(h), minutes: pad(m), seconds: pad(s)};
}

export function calcRemainingSeconds(to) {
  const a = moment(to);
  const now = parseInt(Date.now(), 10) + parseInt(getDiffTime(), 10);
  const b = moment(now);
  return a.diff(b, 'seconds');
}

export function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}

export function calPassedTime(from) {
  const now = Date.now() + getDiffTime();
  const a = moment(now);
  const b = moment(from);

  const h = a.diff(b, 'hours');
  const m = a.diff(b, 'minutes') % 60;
  const s = a.diff(b, 'seconds') - a.diff(b, 'minutes') * 60;

  return `${h}h ${m}m ${s}s`;
}

export function setDiffTime(time) {
  localStorage.setItem(DIFF_TIME, time);
}

function getDiffTime() {
  return localStorage.getItem(DIFF_TIME);
}

export function calcPercent (origin, current) {
  if(origin) {
    return parseInt(100 / origin * (origin - current), 10);
  } else {
    return 100
  }

}

export function getFullName(name) {
  const splitted = name.split(' ');
  let firstName = '';
  let secondName = '';
  if ( splitted.length > 1) {
    secondName = splitted[1];
  }

  if(splitted.length > 0) {
    firstName = splitted[0];
  }

  return { firstName, secondName }
}

export function setQuestionCount(count) {
  localStorage.setItem(QUESTION_COUNT, count)
}

export function getQuestionCount() {
  return localStorage.getItem(QUESTION_COUNT);
}

export function calcPercentOfOption(arr, index) {
  if (arr === undefined) return 0;

  const total = arr.reduce(add, 0);
  if (total === 0) {
    return 0
  }
  const percent = arr[index] / total * 100;
  return parseInt(percent, 10);
}

function add(a, b) {
  return a + b;
}

export function parseQuery(queryString) {
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export function jsonToQueryString(json) {
  return '?' +
    Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key]);
    }).join('&');
}

export function getCurrentTimestamp() {
  let date = new Date();
  return date.getTime();
}