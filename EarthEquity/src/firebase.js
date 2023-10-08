import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCby6_HtXZq4hC7mXzR05rHE8k0KkZN_v8",
    authDomain: "earthequity.firebaseapp.com",
    projectId: "earthequity",
    storageBucket: "earthequity.appspot.com",
    messagingSenderId: "586532408744",
    appId: "1:586532408744:web:c6f45ae850b94c602e219d",
    measurementId: "G-6RTJ8TJ1XV",
    databaseURL: "https://earthequity-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
