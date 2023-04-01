// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSa-grlAKeGb6AMtm_pdWs1v5bUngy0fM",
  authDomain: "wishlist-e1b8c.firebaseapp.com",
  projectId: "wishlist-e1b8c",
  storageBucket: "wishlist-e1b8c.appspot.com",
  messagingSenderId: "619853436632",
  appId: "1:619853436632:web:582c87a1f313c8664ce9ad",
  measurementId: "G-5XEYFP29LX"
};

// Initialize Firebase
app = initializeApp(firebaseConfig)

export const auth = getAuth();
export default app;