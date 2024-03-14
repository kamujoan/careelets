
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV7zFfIIC06eK5Ha3wsi0IBwnONKSau1M",
  authDomain: "jobs-97028.firebaseapp.com",
  projectId: "jobs-97028",
  storageBucket: "jobs-97028.appspot.com",
  messagingSenderId: "1031197481158",
  appId: "1:1031197481158:web:e3213db21cb1c187835fc7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};