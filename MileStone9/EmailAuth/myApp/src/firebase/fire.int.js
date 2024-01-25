// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVpf9RHJDWg_unYFlGVzIXjmMVFSh_HbA",
  authDomain: "email-auth-29393.firebaseapp.com",
  projectId: "email-auth-29393",
  storageBucket: "email-auth-29393.appspot.com",
  messagingSenderId: "11929753501",
  appId: "1:11929753501:web:a4d75a4574a86ce1d1c174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
