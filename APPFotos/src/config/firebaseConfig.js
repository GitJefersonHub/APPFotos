// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUJHuSQbZpnPYjRjWN4RqOqzBIUVtZ97M",
  authDomain: "appfotos-d0bf2.firebaseapp.com",
  projectId: "appfotos-d0bf2",
  storageBucket: "appfotos-d0bf2.appspot.com",
  messagingSenderId: "304528250033",
  appId: "1:304528250033:web:76196df764992a438bbe90",
  measurementId: "G-GBYQ76NMG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);