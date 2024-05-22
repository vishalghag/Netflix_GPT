// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy_pn0ssqoDnB5Hlu3BSO6eCipEiuWAQw",
  authDomain: "vistaraaassignment.firebaseapp.com",
  projectId: "vistaraaassignment",
  storageBucket: "vistaraaassignment.appspot.com",
  messagingSenderId: "255546705868",
  appId: "1:255546705868:web:cf60923f132083c317ff69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
