// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZXff8aylWIAWTzhcEzP5F_wa99r4KYQ4",
  authDomain: "personal-apps-14e52.firebaseapp.com",
  projectId: "personal-apps-14e52",
  storageBucket: "personal-apps-14e52.firebasestorage.app",
  messagingSenderId: "210533677189",
  appId: "1:210533677189:web:d1daeb6480904a094051ec",
  measurementId: "G-CFTVLBWM0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();