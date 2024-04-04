// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj8-xUUb360N1WokFkVf3pgrEmOSAhy_4",
  authDomain: "react-dragon-news-auth-b5ef8.firebaseapp.com",
  projectId: "react-dragon-news-auth-b5ef8",
  storageBucket: "react-dragon-news-auth-b5ef8.appspot.com",
  messagingSenderId: "1075993768788",
  appId: "1:1075993768788:web:c5bae32310f5ee30abcec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;