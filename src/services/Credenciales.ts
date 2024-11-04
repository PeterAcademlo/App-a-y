// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKdcHzb2Wa4Ve4U61qPovpRC5JNuZyei4",
  authDomain: "any-app-control-asistencia.firebaseapp.com",
  projectId: "any-app-control-asistencia",
  storageBucket: "any-app-control-asistencia.appspot.com",
  messagingSenderId: "447905240805",
  appId: "1:447905240805:web:b2e289b806203358a7a60c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

export { auth, db };
export default appFirebase;