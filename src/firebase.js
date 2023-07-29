// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { auth } from '.';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR0DLdm5YwNUZulACIu2qq9Ws-jo3XI3M",
  authDomain: "login-fb3c4.firebaseapp.com",
  projectId: "login-fb3c4",
  storageBucket: "login-fb3c4.appspot.com",
  messagingSenderId: "483882781892",
  appId: "1:483882781892:web:7d365c75a07009df824d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};