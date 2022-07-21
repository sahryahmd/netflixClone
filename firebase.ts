// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4CihmGvowdFE5TJoJ6TLAAjuL08sXOOk",
  authDomain: "belajar-next-279f1.firebaseapp.com",
  projectId: "belajar-next-279f1",
  storageBucket: "belajar-next-279f1.appspot.com",
  messagingSenderId: "449981927301",
  appId: "1:449981927301:web:1f865f80e58d7b42a87eec"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
