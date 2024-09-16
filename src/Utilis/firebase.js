// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogpro-d50a9.firebaseapp.com",
  projectId: "blogpro-d50a9",
  storageBucket: "blogpro-d50a9.appspot.com",
  messagingSenderId: "871116136753",
  appId: "1:871116136753:web:807f305e935d54387b9010"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);