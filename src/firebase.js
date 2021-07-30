import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB5ySlC4W8Qn0ZR14uK_nTdez79rNrRklw",
    authDomain: "ecommerce-be016.firebaseapp.com",
    projectId: "ecommerce-be016",
    storageBucket: "ecommerce-be016.appspot.com",
    messagingSenderId: "983813081967",
    appId: "1:983813081967:web:e518ba31ecaca073a0b69a",
    measurementId: "G-M1WEN5YBK1"
  };
  
// Hace que firebase quede conectado a la app de la consola
const app =  firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    //Retorna el acceso al servico firestore
    return firebase.firestore(app)
}