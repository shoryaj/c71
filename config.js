import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAsjYJaQ0AcWAQ5yDfj3KxeFDx2j5TA_H8",
    authDomain: "c71hw-22a78.firebaseapp.com",
    projectId: "c71hw-22a78",
    storageBucket: "c71hw-22a78.appspot.com",
    messagingSenderId: "88837132898",
    appId: "1:88837132898:web:ff6ef804b1f226cdb4373b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
