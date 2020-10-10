import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtWE8mxfL6EQBsGhLOjX0o_33eTQZkTv4",
  authDomain: "clone-2553d.firebaseapp.com",
  databaseURL: "https://clone-2553d.firebaseio.com",
  projectId: "clone-2553d",
  storageBucket: "clone-2553d.appspot.com",
  messagingSenderId: "266056712437",
  appId: "1:266056712437:web:218d1ddc72a9227ee305bc",
  measurementId: "G-VDRLXR2ZEP",
});

const auth = firebase.auth();

export { auth };
