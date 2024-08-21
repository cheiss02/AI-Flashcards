// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE4-mb4nimkIzJp7G3vd3nlmk4FxXCkGg",
  authDomain: "flashcardsaas-efa38.firebaseapp.com",
  projectId: "flashcardsaas-efa38",
  storageBucket: "flashcardsaas-efa38.appspot.com",
  messagingSenderId: "39907009452",
  appId: "1:39907009452:web:b7985de4e45e13b515d009",
  measurementId: "G-89Q9QX3R47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}