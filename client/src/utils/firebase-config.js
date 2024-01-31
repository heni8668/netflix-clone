// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGPueLxiqdQHrYf5h7cEXhOyk_wyb8J7c",
  authDomain: "netflix-clone-9bc63.firebaseapp.com",
  projectId: "netflix-clone-9bc63",
  storageBucket: "netflix-clone-9bc63.appspot.com",
  messagingSenderId: "817825835840",
  appId: "1:817825835840:web:cf71023096438cdeffe8a5",
  measurementId: "G-BVKL0THNKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);