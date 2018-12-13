import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFVoItyrbVf-kjGfGUssErlsEFkmO08ZM",
  authDomain: "catch-of-the-day-ashj.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ashj.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// Named export
export { firebaseApp };

// default export
export default base;