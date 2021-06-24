import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDHGjhlpOdgVdkoRH8wKe-k4MUwNRWjpWM",
    authDomain: "booksanta-class-77.firebaseapp.com",
    projectId: "booksanta-class-77",
    storageBucket: "booksanta-class-77.appspot.com",
    messagingSenderId: "1075138550341",
    appId: "1:1075138550341:web:061997575320e2881be12c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()