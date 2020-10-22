import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB5DN1B2ZPHgMAtArh1WR5EN4KcHH9nuhA",
  authDomain: "facebook-messenger-clone-f2ffd.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-f2ffd.firebaseio.com",
  projectId: "facebook-messenger-clone-f2ffd",
  storageBucket: "facebook-messenger-clone-f2ffd.appspot.com",
  messagingSenderId: "869513603770",
  appId: "1:869513603770:web:e836777749463a2f30b083",
  measurementId: "G-S8GXTY25KR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// If firebase expired
// https://console.firebase.google.com/u/0/project/facebook-messenger-clone-f2ffd/firestore/rules
