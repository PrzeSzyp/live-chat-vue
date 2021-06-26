import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//firebase kofiguracje
const firebaseConfig = {
  apiKey: "AIzaSyBufq3fS68qEGIQs8O7WMdOPh-PRuSNnME",
  authDomain: "chat-1037e.firebaseapp.com",
  databaseURL: "https://chat-1037e-default-rtdb.firebaseio.com",
  projectId: "chat-1037e",
  storageBucket: "chat-1037e.appspot.com",
  messagingSenderId: "292848856226",
  appId: "1:292848856226:web:987644038d9f3cb553fbfb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
