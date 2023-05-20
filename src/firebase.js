// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw-GhlJW57W7fMqFR4XbJZPZqsxlE8UY4",
    authDomain: "one-read-72fb0.firebaseapp.com",
    projectId: "one-read-72fb0",
    storageBucket: "one-read-72fb0.appspot.com",
    messagingSenderId: "495901975405",
    appId: "1:495901975405:web:a5dfa2df0b26663c11b064",
    measurementId: "G-94QLYVWV2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;