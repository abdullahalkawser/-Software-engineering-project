// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWAFtZYQ3R6R3_S0WFCD0UJemMYCmBe0",
  authDomain: "mohamilon-auth.firebaseapp.com",
  projectId: "mohamilon-auth",
  storageBucket: "mohamilon-auth.appspot.com",
  messagingSenderId: "524084894212",
  appId: "1:524084894212:web:4f5a6ee412869bafeef351"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
