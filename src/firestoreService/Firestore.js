import firebase from "firebase";
require("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCPijzExZEbxuytaCdBabSs8XMGjV6EaP4",
  authDomain: "go-cloud-challenge.firebaseapp.com",
  databaseURL: "https://go-cloud-challenge.firebaseio.com",
  projectId: "go-cloud-challenge",
  storageBucket: "",
  messagingSenderId: "734461660536"
};
firebase.initializeApp(config);

// InitializeApp(config)
var db = firebase.firestore;

export default db;
