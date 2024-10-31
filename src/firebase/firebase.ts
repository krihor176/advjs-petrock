import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBa5XW3AHAR4QmlZjSStNXaHt8Fxvw9uPQ",
  authDomain: "mypetrock-ce682.firebaseapp.com",
  projectId: "mypetrock-ce682",
  storageBucket: "mypetrock-ce682.appspot.com",
  messagingSenderId: "379797585264",
  appId: "1:379797585264:web:6f52b72c047c40c35ee3b5",
  measurementId: "G-F8WSSTFV6S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const rockNameCollectionRef = collection(db, "Rock-name");
export const rockHatCollectionRef = collection(db, "Rock-hats");
export { auth };
