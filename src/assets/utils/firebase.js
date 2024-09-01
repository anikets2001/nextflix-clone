// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD78RHGbpYgOx5nO0UmHMhgFCKaFyY07KY",
  authDomain: "netflixgpt-b29c9.firebaseapp.com",
  projectId: "netflixgpt-b29c9",
  storageBucket: "netflixgpt-b29c9.appspot.com",
  messagingSenderId: "969360679741",
  appId: "1:969360679741:web:ec0702e70af9995751db54",
  measurementId: "G-B6HC2FCKRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
