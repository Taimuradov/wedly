import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3sM4sZBrOLo4Mer7ZaprvIpCEFCevwsQ",
  authDomain: "sergai-maria.firebaseapp.com",
  projectId: "sergai-maria",
  storageBucket: "sergai-maria.firebasestorage.app",
  messagingSenderId: "908938569424",
  appId: "1:908938569424:web:dc71e8cf6705e07b6460d5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
