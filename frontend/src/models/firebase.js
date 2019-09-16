import * as firebase from 'firebase';
import firebaseConfig from '../constants/firebase';

const {
  apiKey, authDomain, databaseURL, storageBucket, messagingSenderId,
} = firebaseConfig;

let firebaseInitialized = false;

if (apiKey && authDomain && databaseURL && storageBucket && messagingSenderId) {
  firebase.initializeApp({
    apiKey, authDomain, databaseURL, storageBucket, messagingSenderId,
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? firebase.database().ref() : null;
export const Firebase = firebaseInitialized ? firebase : null;
