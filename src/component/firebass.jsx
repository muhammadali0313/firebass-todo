// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGWs-93hn6bDKHOoH3njA7ndvQroJPkIY",
  authDomain: "login-auth-306fc.firebaseapp.com",
  projectId: "login-auth-306fc",
  storageBucket: "login-auth-306fc.appspot.com",
  messagingSenderId: "58030338839",
  appId: "1:58030338839:web:8e2b31aa946b94a5ee3d52"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;
