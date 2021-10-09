import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCpvmsRz7BlhHnq3tEhLWkWeKU0zkl_0uE",
    authDomain: "my-auth-534c0.firebaseapp.com",
    projectId: "my-auth-534c0",
    storageBucket: "my-auth-534c0.appspot.com",
    messagingSenderId: "255014097975",
    appId: "1:255014097975:web:ff8fdddc4c7519a7021bb2"
    };

    const app = firebase.initializeApp(firebaseConfig);
    export const auth = firebase.auth();
  
    export default firebase







