// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI6wgbts565qHXtzQQ_k8PNNIvj1GZ-c0",
  authDomain: "smr-ecommerce.firebaseapp.com",
  projectId: "smr-ecommerce",
  storageBucket: "smr-ecommerce.appspot.com",
  messagingSenderId: "312328267215",
  appId: "1:312328267215:web:947d40604486aa16825eba",
  measurementId: "G-DEDC1DQH76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
