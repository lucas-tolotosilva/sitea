import { initializeApp } from "firebase/app";   
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmNiibo0JV6dnHPs1qxEIsW5pi-zZK8qc",
  authDomain: "sitea-63c4f.firebaseapp.com",
  projectId: "sitea-63c4f",
  storageBucket: "sitea-63c4f.appspot.com",
  messagingSenderId: "335307705080",
  appId: "1:335307705080:web:e752dddf1eddc2ae20c90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)