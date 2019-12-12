import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOwXljE45DDCm3vISy8yvkI2SCEA-5kcs",
    authDomain: "marionetninja-33de6.firebaseapp.com",
    databaseURL: "https://marionetninja-33de6.firebaseio.com",
    projectId: "marionetninja-33de6",
    storageBucket: "marionetninja-33de6.appspot.com",
    messagingSenderId: "949024961794",
    appId: "1:949024961794:web:29e82954846840726bbe1b"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;