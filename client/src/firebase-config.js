// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
