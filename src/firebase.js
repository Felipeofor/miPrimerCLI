import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbr3qY758F_8EU9u-HQkAhWsIbdlfbeNQ",
  authDomain: "el-super-del-taekwondo.firebaseapp.com",
  projectId: "el-super-del-taekwondo",
  storageBucket: "el-super-del-taekwondo.appspot.com",
  messagingSenderId: "128225224512",
  appId: "1:128225224512:web:723fc3c9a1483cf15abca5"
};

  //Firebase queda conectada a la app de la consola 
  const app = firebase.initializeApp(firebaseConfig);

  export const getFirestore = () => {
      //Retorna el acceso al servicio de Firestore
    return firebase.firestore(app)
  }