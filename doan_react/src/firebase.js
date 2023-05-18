import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkcgwtSPXC4oIrmSBMSjEC9lI7pXkJST4",
  authDomain: "chatapp-8df2b.firebaseapp.com",
  databaseURL: "https://chatapp-8df2b-default-rtdb.firebaseio.com",
  projectId: "chatapp-8df2b",
  storageBucket: "chatapp-8df2b.appspot.com",
  messagingSenderId: "396756851088",
  appId: "1:396756851088:web:3b153979ff7600b771fb15",
  measurementId: "G-02N1TX20Y4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
