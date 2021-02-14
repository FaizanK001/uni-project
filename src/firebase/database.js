import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhtg4_cHjKbL-EPa8CPaXT4NS9pHpqgMY",
    authDomain: "cardiomyopathy-p.firebaseapp.com",
    projectId: "cardiomyopathy-p",
    storageBucket: "cardiomyopathy-p.appspot.com",
    messagingSenderId: "740652095333",
    appId: "1:740652095333:web:6d6c590d44b0a1a96eb38c"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const firebaseAuthentication = firebase.auth();
    const firebaseFireStore = firebase.firestore();

    export{firebaseAuthentication, firebaseFireStore};