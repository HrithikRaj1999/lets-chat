// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDybBnTAh5LZ0Yt8dMh3xSXZMpmzjnjFis",
  authDomain: "lets-chat-e79dd.firebaseapp.com",
  projectId: "lets-chat-e79dd",
  storageBucket: "lets-chat-e79dd.appspot.com",
  messagingSenderId: "467535825435",
  appId: "1:467535825435:web:d43a6a45e7591856b786be",
  measurementId: "G-L0D22WD4DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);