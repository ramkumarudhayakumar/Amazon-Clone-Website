// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR39_yC3u2rseP1b2FCxfKnquaXPVd5fc",
  authDomain: "mini-ecommerce-7c7f7.firebaseapp.com",
  projectId: "mini-ecommerce-7c7f7",
  storageBucket: "mini-ecommerce-7c7f7.appspot.com",
  messagingSenderId: "256014823511",
  appId: "1:256014823511:web:c199c87a46dfe7d5193312",
  measurementId: "G-21BVWQ5PWK",
};
let auth;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
auth = initializeAuth(app);

export default auth;
