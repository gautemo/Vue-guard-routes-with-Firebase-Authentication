import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkZPJsYdh7-4mcsuiPszvVERSwDOBKb74",
  authDomain: "vue-routes-authentication.firebaseapp.com",
  databaseURL: "https://vue-routes-authentication.firebaseio.com",
  projectId: "vue-routes-authentication",
  storageBucket: "vue-routes-authentication.appspot.com",
  messagingSenderId: "680655489437",
  appId: "1:680655489437:web:9d66d2b0f438e3e9014774",
  measurementId: "G-CGL0FS2DVQ",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export async function login() {
    await signInWithEmailAndPassword(auth, 'user@mail.com', 'password')
}

export async function logout() {
    await signOut(auth)
}
