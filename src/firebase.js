import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWGEqUSyFJklfT595qQKmybv-sGH4Fi_c",
  authDomain: "auth-development-c5d6b.firebaseapp.com",
  projectId: "auth-development-c5d6b",
  storageBucket: "auth-development-c5d6b.appspot.com",
  messagingSenderId: "324060534812",
  appId: "324060534812:web:dc19aa1711f9de7c87e7d9"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
