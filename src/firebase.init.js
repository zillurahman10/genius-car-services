import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCFfVBDdM6kpX-Z4uuWAppxpgRlId7Jum4",
    authDomain: "genius-car-services-a4e92.firebaseapp.com",
    projectId: "genius-car-services-a4e92",
    storageBucket: "genius-car-services-a4e92.appspot.com",
    messagingSenderId: "78431438545",
    appId: "1:78431438545:web:58f6ec144a8d517ba6a7f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;