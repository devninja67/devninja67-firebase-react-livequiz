const functions = require('firebase-functions');

const admin = require('firebase-admin');
const serviceAccount = require('./proof-of-concept-39636-service-account.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://proof-of-concept-39636.firebaseio.com'
});
const express = require('express');
const app = express();
var db = admin.database();

const cors = require('cors')({origin: true});

app.get('/auth',(req, res) => {

	cors(req, res, () => {});

	const userid = req.query.userid;
	const username = req.query.username;
	const avatar = req.query.avatar;
	const premium = req.query.premium;
	
    var usersRef = db.ref('/osc-users');

    usersRef.once('value', (snapshot) => {        
        if (!snapshot.hasChild(userid)) {
        	var userRef = db.ref('/osc-users/' + userid);
			userRef.set({
				name: username,
				avatar: avatar,
				freebie: 0,
				premium: premium
			});
        } 
    	
    	admin.auth().createCustomToken(userid) // Create custom Token from uid.
			.then((customToken) => {
				return res.status(200).json({
					customToken: customToken,
					name: username,
					avatar: avatar,
					uId: userid,
					premium: premium
				});
		      
			})
			.catch((error) => {
				console.log("Error creating custom token:", error);
				return res.status(500);
			});
        
    });
});

exports.api = functions.https.onRequest(app);