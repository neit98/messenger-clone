import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAivZPuYB9Sto5XEtnMeLEOVkPQXCT8W3g",
  authDomain: "messenger-clone-2f2ec.firebaseapp.com",
  projectId: "messenger-clone-2f2ec",
  storageBucket: "messenger-clone-2f2ec.appspot.com",
  messagingSenderId: "486758382307",
  appId: "1:486758382307:web:60bcd87e1d709d300363d6",
  measurementId: "G-W9VE5LQNR9",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
