import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOJV9zfRdzKFlyIa6Gg03mygixYOdyO4",
  authDomain: "booksstore-367618.firebaseapp.com",
  projectId: "booksstore-367618",
  storageBucket: "booksstore-367618.appspot.com",
  messagingSenderId: "791897536552",
  appId: "1:791897536552:web:dce68a4351277c6bb91d1d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </React.StrictMode>
);
