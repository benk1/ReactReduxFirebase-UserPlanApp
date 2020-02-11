//Initialize Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyD0vF66rsWWIp0JOvGEZSnNUlIq4QHlVBs",
  authDomain: "bernard-userplan.firebaseapp.com",
  databaseURL: "https://bernard-userplan.firebaseio.com",
  projectId: "bernard-userplan",
  storageBucket: "bernard-userplan.appspot.com",
  messagingSenderId: "772597671574",
  appId: "1:772597671574:web:d1413b08a719cac00784b7",
  measurementId: "G-G6YY9BG3B0"
};
firebase.initializeApp(config);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
