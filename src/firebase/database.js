import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPQT8ecgwnq9aJNIHd2ChQPjeGnpzViNo",
  authDomain: "cardiomyopathydb-akram.firebaseapp.com",
  databaseURL: "https://cardiomyopathydb-akram-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cardiomyopathydb-akram",
  storageBucket: "cardiomyopathydb-akram.appspot.com",
  messagingSenderId: "869465104342",
  appId: "1:869465104342:web:c6fba44a6c3ae66e18ce77",
  measurementId: "G-BX82H1662V"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const firebaseAuthentication = firebase.auth();
    const firebaseFireStore = firebase.firestore();

    export{firebaseAuthentication, firebaseFireStore};
