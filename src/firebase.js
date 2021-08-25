import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCNf6L2VZTR8WqQSYNorACTEjlHCyPpf9A",
  authDomain: "el-super-del-taekwondo--2.firebaseapp.com",
  projectId: "el-super-del-taekwondo--2",
  storageBucket: "el-super-del-taekwondo--2.appspot.com",
  messagingSenderId: "157116770338",
  appId: "1:157116770338:web:295aa17cb98c22160c427b",
  measurementId: "G-48R1F86S94"
};

  //Firebase queda conectada a la app de la consola 
  const app = firebase.initializeApp(firebaseConfig);

  export const getFirestore = () => {
      //Retorna el acceso al servicio de Firestore
    return firebase.firestore(app)
  }