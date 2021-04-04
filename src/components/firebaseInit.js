import firebase from "firebase";
import firebaseConfig from "./firebaseConfig.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
