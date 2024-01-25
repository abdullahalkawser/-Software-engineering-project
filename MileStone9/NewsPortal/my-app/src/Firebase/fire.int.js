// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCctuBe8sYqnv-YhKBjzAetD0wnipAPdAE",
  authDomain: "news-portal-22f7c.firebaseapp.com",
  projectId: "news-portal-22f7c",
  storageBucket: "news-portal-22f7c.appspot.com",
  messagingSenderId: "782543868730",
  appId: "1:782543868730:web:dc55c4b6eca9ce36017603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;