import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import store from './redux/store-reducer';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
export const firestore = firebase.firestore();
let item = firestore.collection('users').doc('customer');
console.log(item);

ReactDOM.render(
    <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
