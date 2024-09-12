import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXXJGnlG27VD9Mi9IuZaiKm64pyR-wtXk",
  authDomain: "ccimendoza-4e288.firebaseapp.com",
  projectId: "ccimendoza-4e288",
  storageBucket: "ccimendoza-4e288.appspot.com",
  messagingSenderId: "675758169834",
  appId: "1:675758169834:web:bb45ee8f4e7c3ce2710193",

};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
