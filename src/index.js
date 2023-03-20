import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAMUKGvzY0oPeu7OSV4cO3YhB3D1IFnxo",
  authDomain: "teleport-9499d.firebaseapp.com",
  databaseURL: "https://teleport-9499d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "teleport-9499d",
  storageBucket: "teleport-9499d.appspot.com",
  messagingSenderId: "635605287018",
  appId: "1:635605287018:web:2437d1c238da6d21bd8a13",
  measurementId: "G-DJXN57EX6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);