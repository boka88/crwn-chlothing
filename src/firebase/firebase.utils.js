import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCPJourgBBqol4LnA4c5jdYIAosGNkG9bo",
    authDomain: "crwn-db-34cb6.firebaseapp.com",
    databaseURL: "https://crwn-db-34cb6.firebaseio.com",
    projectId: "crwn-db-34cb6",
    storageBucket: "crwn-db-34cb6.appspot.com",
    messagingSenderId: "231053424280",
    appId: "1:231053424280:web:3656d6f2db2fac814602ed",
    measurementId: "G-FPZHHWX8PJ"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
