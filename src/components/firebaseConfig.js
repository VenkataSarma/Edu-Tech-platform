// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBQtb6kTi7dT4eTYl2Mc08wBHVCJvzvWzA",
    authDomain: "authentications-2ed34.firebaseapp.com",
    databaseURL: "https://authentications-2ed34-default-rtdb.firebaseio.com",
    projectId: "authentications-2ed34",
    storageBucket: "authentications-2ed34.appspot.com",
    messagingSenderId: "252597494675",
    appId: "1:252597494675:web:83c0634cd80b4b73fd3e66"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
