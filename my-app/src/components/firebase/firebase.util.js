import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
const config = {
    apiKey: "AIzaSyD0MQYfuzp8yOkcZ1hQQONtQXzMSkNKZvE",
    authDomain: "vsshop-44366.firebaseapp.com",
    databaseURL: "https://vsshop-44366.firebaseio.com",
    projectId: "vsshop-44366",
    storageBucket: "",
    messagingSenderId: "179899787196",
    appId: "1:179899787196:web:76049caee95ff2b1"
};
 firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 export const signInwithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;
