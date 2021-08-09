const firebase = require('firebase')

var firebaseConfig = {
  apiKey: "AIzaSyCBIopTIe9Rsu7Pai-052ODmrV1ahwGEbw",
  authDomain: "disneyplus-clone-ba10e.firebaseapp.com",
  projectId: "disneyplus-clone-ba10e",
  storageBucket: "disneyplus-clone-ba10e.appspot.com",
  messagingSenderId: "410992760496",
  appId: "1:410992760496:web:6702ab67c55a919507cd75",
  measurementId: "G-PTW9K0BP1J"
};

// Initialize Firebase


  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
module.exports = {
  db
}
  
