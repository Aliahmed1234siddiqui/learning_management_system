// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB81LiHeAdvsdMEUP-wXdD6f7LzTDhskdQ",
  authDomain: "lms-5cd57.firebaseapp.com",
  projectId: "lms-5cd57",
  storageBucket: "lms-5cd57.appspot.com",
  messagingSenderId: "622968537515",
  appId: "1:622968537515:web:f4589f9020c40c844692ee",
  measurementId: "G-K0LCDKLQ95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);