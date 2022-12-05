import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDC4KmA9udx4_eCR21qgwEa9mnhWbMOK1A",
  authDomain: "funground-4fce4.firebaseapp.com",
  projectId: "funground-4fce4",
  storageBucket: "funground-4fce4.appspot.com",
  messagingSenderId: "594356475647",
  appId: "1:594356475647:web:05fdfa8f4d9b95e5421eca",
  measurementId: "G-EQMQ1362KX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;