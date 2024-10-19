import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5UeOKKvkHnCO1yXwpSSEyCAKIMU2iCXM",
  authDomain: "realtime-text-share-cffb8.firebaseapp.com",
  projectId: "realtime-text-share-cffb8",
  storageBucket: "realtime-text-share-cffb8.appspot.com",
  messagingSenderId: "399562537942",
  appId: "1:399562537942:web:9447b2e7118fa63ff90277",
};

// Initialize Firebase
const FIREBASE = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const DATABASE = getDatabase(
  FIREBASE,
  "https://realtime-text-share-cffb8-default-rtdb.firebaseio.com/"
);

export { DATABASE };
