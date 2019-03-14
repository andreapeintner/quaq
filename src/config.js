import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyDSg5gDDTJ9f4-AzHz7W_Yb8QpHyPzEy0M",
  authDomain: "quaq-5139b.firebaseapp.com",
  databaseURL: "https://quaq-5139b.firebaseio.com",
  projectId: "quaq-5139b",
  storageBucket: "quaq-5139b.appspot.com",
  messagingSenderId: "200273462338"
}


let app = Firebase.initializeApp(config)
export const db = app.database()