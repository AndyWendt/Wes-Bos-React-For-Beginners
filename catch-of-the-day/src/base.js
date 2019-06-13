import Rebase from 're-base';
import firebase from 'firebase';
import auth from './auth.json';

const firebaseApp = firebase.initializeApp(auth);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }
