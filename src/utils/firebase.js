// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflixgpt-28f42.firebaseapp.com",
  projectId: "netflixgpt-28f42",
  storageBucket: "netflixgpt-28f42.appspot.com",
  messagingSenderId: "192010289744",
  appId: "1:192010289744:web:9b293fde1a8846e8ef4755",
  measurementId: "G-4BG00KWEJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 