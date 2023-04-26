import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC00RO3kZAL4xK4EJd9kQFfqPzFW9iSvn8",
//   authDomain: "chat-96a30.firebaseapp.com",
//   projectId: "chat-96a30",
//   storageBucket: "chat-96a30.appspot.com",
//   messagingSenderId: "1076906019700",
//   appId: "1:1076906019700:web:dc7595572713966cc47a21",
//   measurementId: "G-9RV6EVRH4X"
// };





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoUpxQZXVvns6DpAnmMIIOdFTuo2oqUCk",
  authDomain: "newchatapp-eef38.firebaseapp.com",
  projectId: "newchatapp-eef38",
  storageBucket: "newchatapp-eef38.appspot.com",
  messagingSenderId: "522568464505",
  appId: "1:522568464505:web:9d4a5063aa417dd96b7ca8",
  measurementId: "G-84BPFM4CYB"
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()




