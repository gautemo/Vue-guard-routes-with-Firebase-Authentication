import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkZPJsYdh7-4mcsuiPszvVERSwDOBKb74",
    authDomain: "vue-routes-authentication.firebaseapp.com",
    databaseURL: "https://vue-routes-authentication.firebaseio.com",
    projectId: "vue-routes-authentication",
    storageBucket: "vue-routes-authentication.appspot.com",
    messagingSenderId: "680655489437",
    appId: "1:680655489437:web:9d66d2b0f438e3e9014774",
    measurementId: "G-CGL0FS2DVQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebase;