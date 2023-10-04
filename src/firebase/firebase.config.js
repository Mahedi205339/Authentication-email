// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0r4L-xXr97Nzde_qBZlIBEhz3zyj7fbg",
  authDomain: "auth-email-p03.firebaseapp.com",
  projectId: "auth-email-p03",
  storageBucket: "auth-email-p03.appspot.com",
  messagingSenderId: "856692776063",
  appId: "1:856692776063:web:a90eb239b7f568e891f34a",
  measurementId: "G-E5K5YD5VE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;