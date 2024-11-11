// // import firebase from 'firebase/app';
// // import 'firebase/firestore';

// // const firebaseConfig = {
// //   apiKey: "AIzaSyA0CNk5rY6wzNimSV6IECBPry1ybxl1_oY",
// //   authDomain: "pdf-co-viewer-rohan.firebaseapp.com",
// //   projectId: "pdf-co-viewer-rohan",
// //   storageBucket: "pdf-co-viewer-rohan.firebasestorage.app",
// //   messagingSenderId: "684200807696",
// //   appId: "1:684200807696:web:b27f6cfa3e2464f2676995",
// // };

// // firebase.initializeApp(firebaseConfig);
// // export const db = firebase.firestore();


// Import the necessary functions from the modular SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0CNk5rY6wzNimSV6IECBPry1ybxl1_oY",
  authDomain: "pdf-co-viewer-rohan.firebaseapp.com",
  projectId: "pdf-co-viewer-rohan",
  storageBucket: "pdf-co-viewer-rohan.firebasestorage.app",
  messagingSenderId: "684200807696",
  appId: "1:684200807696:web:b27f6cfa3e2464f2676995",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
console.log("Firebase initialized:", app);
export const storage = getStorage(app); // This line is essential for using Firebase Storage
