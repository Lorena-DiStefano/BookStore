import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyAgOJV9zfRdzKFlyIa6Gg03mygixYOdyO4",
    authDomain: "booksstore-367618.firebaseapp.com",
    projectId: "booksstore-367618",
    storageBucket: "booksstore-367618.appspot.com",
    messagingSenderId: "791897536552",
    appId: "1:791897536552:web:dce68a4351277c6bb91d1d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db