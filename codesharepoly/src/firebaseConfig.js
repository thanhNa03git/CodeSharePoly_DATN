// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaMB-7VhVXKnA8YvXFP2ejFSjVMgyYz6M",
    authDomain: "codesharepoly-4453e.firebaseapp.com",
    projectId: "codesharepoly-4453e",
    storageBucket: "codesharepoly-4453e.appspot.com",
    messagingSenderId: "922902498380",
    appId: "1:922902498380:web:ab37d29c548cf4e0e9b8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);