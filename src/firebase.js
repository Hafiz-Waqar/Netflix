import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBGhRq-tpRcOeNZByDNCUMkqn059tswahI",
    authDomain: "netflix-ec847.firebaseapp.com",
    projectId: "netflix-ec847",
    storageBucket: "netflix-ec847.appspot.com",
    messagingSenderId: "659664445775",
    appId: "1:659664445775:web:1c391d702eeaa1e602e53a"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { auth, firebaseApp };
  export default db;