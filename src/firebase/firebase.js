import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJU2AWElr-wO8YEw65Lhd20QmjkbX35-o",
  authDomain: "wedding-invitation-47043.firebaseapp.com",
  projectId: "wedding-invitation-47043",
  storageBucket: "wedding-invitation-47043.firebasestorage.app",
  messagingSenderId: "570315098343",
  appId: "1:570315098343:web:aa7864b99f86b7c84a3a42",
  measurementId: "G-9Y4Y9NE04M",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);