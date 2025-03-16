import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoaNKMO2jwSLbx5xy7GK1-VGP3RWN18G0",
  authDomain: "wanderpets-db-2307b.firebaseapp.com",
  databaseURL: "https://wanderpets-db-2307b-default-rtdb.firebaseio.com",
  projectId: "wanderpets-db-2307b",
  storageBucket: "wanderpets-db-2307b.appspot.com",
  messagingSenderId: "101528582501",
  appId: "1:101528582501:web:16a85b58bc4c25fa67498c",
};

const app = initializeApp(firebaseConfig);

// Exporting auth and firestore instances
export const auth = getAuth(app);
export const firestore = getFirestore(app);
