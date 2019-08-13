import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
const config = {
    apiKey: "AIzaSyBgwROM_Jjp3Y4VFobhx1pj2cc0T_vKOCQ",
    authDomain: "vsshop-f5063.firebaseapp.com",
    databaseURL: "https://vsshop-f5063.firebaseio.com",
    projectId: "vsshop-f5063",
    storageBucket: "",
    messagingSenderId: "843652685974",
    appId: "1:843652685974:web:6ba3e235571ae7db"
};
 firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 export const signInwithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;