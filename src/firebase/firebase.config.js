import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ4M0pIaIC6WHVSvyJud3DlBDgajdKjok",
  authDomain: "travel-agency-react-a58a4.firebaseapp.com",
  projectId: "travel-agency-react-a58a4",
  storageBucket: "travel-agency-react-a58a4.appspot.com",
  messagingSenderId: "538555191614",
  appId: "1:538555191614:web:96fd38179361c428b89c6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;