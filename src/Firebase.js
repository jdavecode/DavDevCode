import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAOTv76l0D2-HCuBGR3gQPdBSoA8upmnI",
    authDomain: "clone-site-a8e1d.firebaseapp.com",
    projectId: "clone-site-a8e1d",
    storageBucket: "clone-site-a8e1d.appspot.com",
    messagingSenderId: "234041140738",
    appId: "1:234041140738:web:3efbc6ddd91f110fc1691b",
    measurementId: "G-C38FR1LF7C"
});

const auth = firebase.auth();

export { auth };


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBAOTv76l0D2-HCuBGR3gQPdBSoA8upmnI",
//     authDomain: "clone-site-a8e1d.firebaseapp.com",
//     projectId: "clone-site-a8e1d",
//     storageBucket: "clone-site-a8e1d.appspot.com",
//     messagingSenderId: "234041140738",
//     appId: "1:234041140738:web:3efbc6ddd91f110fc1691b",
//     measurementId: "G-C38FR1LF7C"
//   };