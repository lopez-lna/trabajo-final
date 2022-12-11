import { getFirestore } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
 // apiKey: "AIzaSyAMh_UUTpR2enDrB3KqMg7xChTDKK-elSw",
 apiKey: "uqKNtmumKF7OUljCvGj8",
  authDomain: "pruebas-12-b058e.firebaseapp.com",
  projectId: "pruebas-12-b058e",
  storageBucket: "pruebas-12-b058e.appspot.com",
  messagingSenderId: "1077484770591",
  appId: "1:1077484770591:web:daad03a333ec34136d0c2a"
};


const app = initializeApp(firebaseConfig);

const FirebaseFirestore = getFirestore(app);

export {
    FirebaseFirestore

};