// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRtPsMAwS5sywyA_gP5kLQdoJNQhHJHng",
    authDomain: "whatsapp-clone-341ac.firebaseapp.com",
    projectId: "whatsapp-clone-341ac",
    storageBucket: "whatsapp-clone-341ac.appspot.com",
    messagingSenderId: "974893859056",
    appId: "1:974893859056:web:799c21e2b8c0f97a354235",
    measurementId: "G-2FS0CRQVNW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;