import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgaZ7gCaFR91IzPAFM2vui9blIOZY1kl8",
  authDomain: "cardiomyopathydb-f3aec.firebaseapp.com",
  projectId: "cardiomyopathydb-f3aec",
  storageBucket: "cardiomyopathydb-f3aec.appspot.com",
  messagingSenderId: "594685776429",
  appId: "1:594685776429:web:6bb2e3f94b1dbf86d8dea4"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const firebaseAuthentication = firebase.auth();
    const firebaseFireStore = firebase.firestore();

    export{firebaseAuthentication, firebaseFireStore};