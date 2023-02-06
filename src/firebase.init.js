// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9Kk8hVxCHz0HGL1QIKABU41QoaQ5f1g",
  authDomain: "ema-john-simple-59-39367.firebaseapp.com",
  projectId: "ema-john-simple-59-39367",
  storageBucket: "ema-john-simple-59-39367.appspot.com",
  messagingSenderId: "471278131954",
  appId: "1:471278131954:web:21285032b6aa0b718e8e6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
