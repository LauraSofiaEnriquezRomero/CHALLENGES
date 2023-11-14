// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQIM-rQPggISJbwmnvvaCPRLkVEuMMQ68",
  authDomain: "proyecto-96e43.firebaseapp.com",
  projectId: "proyecto-96e43",
  storageBucket: "proyecto-96e43.appspot.com",
  messagingSenderId: "114913660664",
  appId: "1:114913660664:web:1b8b59b3b6a3821cc0750d",
  measurementId: "G-GFYLJCD79X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseStorage = getStorage(app);

export { app, auth, firebaseStorage };