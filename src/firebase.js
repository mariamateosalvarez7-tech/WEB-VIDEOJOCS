import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN3DjaX4zodk6jpZKr3dTW_A_GIvgtShI",
  authDomain: "web-videojocs.firebaseapp.com",
  projectId: "web-videojocs",
  storageBucket: "web-videojocs.firebasestorage.app",
  messagingSenderId: "865118378640",
  appId: "1:865118378640:web:57903d3056e82451f45615"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);