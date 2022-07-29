// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOJ5eQd65xXIqIVA9gBbRBEURvxl11Gw",
  authDomain: "crud-next-firebase-e5cb5.firebaseapp.com",
  projectId: "crud-next-firebase-e5cb5",
  storageBucket: "crud-next-firebase-e5cb5.appspot.com",
  messagingSenderId: "1082703807284",
  appId: "1:1082703807284:web:afe1841ad142794f299b61"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
