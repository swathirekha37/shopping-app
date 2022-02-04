import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyA4T1kIFOZBB96fKzkNHRhq4vNVpCM21DE",
  authDomain: "react-shopping-34419.firebaseapp.com",
  projectId: "react-shopping-34419",
  storageBucket: "react-shopping-34419.appspot.com",
  messagingSenderId: "191258353076",
  appId: "1:191258353076:web:2503afb7cf1f68376126e1",
  measurementId: "G-9Q7X2PDLBD"
}

export const createUserProfile = async(userAuth,additionalData) =>{
  if(!userAuth){ return null}

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  
  if(!snapshot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){console.log('error creating user',error.message)}
  }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
