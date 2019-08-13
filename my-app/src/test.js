import firebase, { firestore } from 'firebase/app';
import 'firebase/firebase-firestore';
firestore = firebase.firestore;
firestore.CollectionReference('/users').doc({'username': 'vipul'});