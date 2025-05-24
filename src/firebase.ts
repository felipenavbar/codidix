// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUWDJ6gcAeIl-gSfyYhz7OTg9metHmK7k",
  authDomain: "codidix-93219.firebaseapp.com",
  projectId: "codidix-93219",
  storageBucket: "codidix-93219.appspot.com",
  messagingSenderId: "545907382017",
  appId: "1:545907382017:web:5b33cd352db459289fed00",
  measurementId: "G-LP139EHFJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };