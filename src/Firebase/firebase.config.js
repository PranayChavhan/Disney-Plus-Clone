import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1UzsL9QK96kA0KMa-Ffs5xMZz6DDvqeo",
    authDomain: "disney-plus-clone-1ee32.firebaseapp.com",
    projectId: "disney-plus-clone-1ee32",
    storageBucket: "disney-plus-clone-1ee32.appspot.com",
    messagingSenderId: "900164032267",
    appId: "1:900164032267:web:3b810f70cc43b33bf8f40e",
    measurementId: "G-CDFSQ9FX8W"
  };

export default firebaseConfig;

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);