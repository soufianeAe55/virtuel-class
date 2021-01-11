var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyAkgtX1zpUx7sPladKn54pZ1k1I_qQ3mg8",
    authDomain: "class-virtuel.firebaseapp.com",
    databaseURL: "https://class-virtuel.firebaseio.com",
    projectId: "class-virtuel",
    storageBucket: "class-virtuel.appspot.com",
    messagingSenderId: "574324612447",
    appId: "1:574324612447:web:14e2a2b0d51e3271216aea"

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  module.exports=firebase;
