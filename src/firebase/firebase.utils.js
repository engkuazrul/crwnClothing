import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBZQx0C3TuXwuqxlUTqfeTgftODYYGFKU8",
  authDomain: "crwn-db-a6aba.firebaseapp.com",
  projectId: "crwn-db-a6aba",
  storageBucket: "crwn-db-a6aba.appspot.com",
  messagingSenderId: "8311694103",
  appId: "1:8311694103:web:fb8aacc177556ff6c3cd52",
  measurementId: "G-0WN4EWP8DD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;