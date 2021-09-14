import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxNnPcL-v3-JgEudKwdODWNJeAsW55jCg",
  authDomain: "chat-gb-2021.firebaseapp.com",
  databaseURL: "https://chat-gb-2021-default-rtdb.firebaseio.com",
  projectId: "chat-gb-2021",
  storageBucket: "chat-gb-2021.appspot.com",
  messagingSenderId: "403671627263",
  appId: "1:403671627263:web:6fdf9734705f8ea80263ca"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth()
