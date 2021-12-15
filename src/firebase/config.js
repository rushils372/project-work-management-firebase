import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-HJbe8Z9mZTC7kymoP4fbONlzxPI8Bko",
    authDomain: "project-management-site-93c64.firebaseapp.com",
    projectId: "project-management-site-93c64",
    storageBucket: "project-management-site-93c64.appspot.com",
    messagingSenderId: "124749097078",
    appId: "1:124749097078:web:63b828cd171509b2d49757"
  }

  // Init Firebase
  firebase.initializeApp(firebaseConfig)

  // Init Services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // Timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}
