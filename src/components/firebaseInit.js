import firebase from "firebase";
import firebaseConfig from "./firebaseConfig.js";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
