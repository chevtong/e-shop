import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD-ib9hFNUVNxYRUedm1bR-qkf2uO9ZqU",
    authDomain: "e-shop-db-e4710.firebaseapp.com",
    projectId: "e-shop-db-e4710",
    storageBucket: "e-shop-db-e4710.appspot.com",
    messagingSenderId: "502507017514",
    appId: "1:502507017514:web:77120652dc808520d97a53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()

  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  export default firebase

