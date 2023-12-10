// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVnNxigNP_O3_-uWzEzptoHd_s_KkuJ2I",
  authDomain: "netflixgpt-b958a.firebaseapp.com",
  projectId: "netflixgpt-b958a",
  storageBucket: "netflixgpt-b958a.appspot.com",
  messagingSenderId: "717160879278",
  appId: "1:717160879278:web:5117f4accdb0ee5562893f",
  measurementId: "G-SRY9Q8EX0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();