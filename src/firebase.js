import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC00RO3kZAL4xK4EJd9kQFfqPzFW9iSvn8",
  authDomain: "chat-96a30.firebaseapp.com",
  projectId: "chat-96a30",
  storageBucket: "chat-96a30.appspot.com",
  messagingSenderId: "1076906019700",
  appId: "1:1076906019700:web:dc7595572713966cc47a21",
  measurementId: "G-9RV6EVRH4X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
