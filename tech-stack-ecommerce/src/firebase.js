import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG2X3S5qQ-i2-xNi2_vZi5cooYIZgEJyY",
  authDomain: "tech-stack-ecommerce.firebaseapp.com",
  projectId: "tech-stack-ecommerce",
  storageBucket: "tech-stack-ecommerce.appspot.com",
  messagingSenderId: "752561253905",
  appId: "1:752561253905:web:041447d4dff67fb77f0bb0",
  measurementId: "G-K5M57PM40M",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const authentication = getAuth();
const signOutV = signOut;
const onAuthStateChangedV = onAuthStateChanged;
const createUserWithEmailAndPasswordV = createUserWithEmailAndPassword;
const signInWithEmailAndPasswordV = signInWithEmailAndPassword;

export {
  db,
  authentication,
  signOutV,
  onAuthStateChangedV,
  createUserWithEmailAndPasswordV,
  signInWithEmailAndPasswordV,
};
