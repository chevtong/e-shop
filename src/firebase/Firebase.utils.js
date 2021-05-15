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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName, email, createdAt,...additionalData
        })
      } catch (error){
        console.log('error in creating users', error.message)
      }
    }

    return userRef
  }


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()

  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  export default firebase

