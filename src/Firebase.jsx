import { initializeApp } from "firebase/app";   
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlpfNSU-ZZb9EHISnYDiPkX7HDvocThdM",
  authDomain: "site-710ba.firebaseapp.com",
  projectId: "site-710ba",
  storageBucket: "site-710ba.appspot.com",
  messagingSenderId: "209836290146",
  appId: "1:209836290146:web:ed1a4dad6e796dd0cae13b",
  measurementId: "G-FFVM7KBKDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)