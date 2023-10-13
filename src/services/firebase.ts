import { initializeApp } from "firebase/app";
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
  connectAuthEmulator,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCspf1XN-yDFRW4Djgb2FCD1bN9By3RAzg",
  authDomain: "cinemate-ad16e.firebaseapp.com",
  projectId: "cinemate-ad16e",
  storageBucket: "",
  messagingSenderId: "103107864723",
  appId: "1:103107864723:web:00ad62c5e192f0c68a8566",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
if (location.hostname === "127.0.0.1" || location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099/", {
    disableWarnings: true,
  });
}
setPersistence(auth, browserLocalPersistence);

export { auth };
