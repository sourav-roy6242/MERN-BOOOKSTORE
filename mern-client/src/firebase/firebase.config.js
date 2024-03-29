// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPu6j5oLT5bJEp0m7BZ8Y2svX44YcDzM",
  authDomain: "mern-book-inventory-544f0.firebaseapp.com",
  projectId: "mern-book-inventory-544f0",
  storageBucket: "mern-book-inventory-544f0.appspot.com",
  messagingSenderId: "347054947265",
  appId: "1:347054947265:web:bdf71ac0660e2183528d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;