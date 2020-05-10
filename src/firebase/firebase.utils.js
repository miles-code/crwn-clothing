import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxqt9itzSBR8kSeh-na7-sEVuCEBE-y6E",
    authDomain: "crwn-db-ae635.firebaseapp.com",
    databaseURL: "https://crwn-db-ae635.firebaseio.com",
    projectId: "crwn-db-ae635",
    storageBucket: "crwn-db-ae635.appspot.com",
    messagingSenderId: "751577629835",
    appId: "1:751577629835:web:97e5e70eec4ae17c88008e",
    measurementId: "G-NHVBD0DP0M"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;