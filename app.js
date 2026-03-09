import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiuOEuiMyDUwviQrcHhD7AiBC4DDcAsck",
  authDomain: "dnzskazkaplans.firebaseapp.com",
  projectId: "dnzskazkaplans",
  storageBucket: "dnzskazkaplans.firebasestorage.app",
  messagingSenderId: "141901317994",
  appId: "1:141901317994:web:a98f853df82fc6e3370713",
  measurementId: "G-NCJ88GE3GK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password).then(() => {
    window.location = "dashboard.html";
  });
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password).then(() => {
    alert("User created");
  });
}
