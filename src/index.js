import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmT29v5MsambTbdOSm0tKK67zehimwONY",
  authDomain: "teleport-2ae52.firebaseapp.com",
  databaseURL: "https://teleport-2ae52-default-rtdb.firebaseio.com",
  projectId: "teleport-2ae52",
  storageBucket: "teleport-2ae52.appspot.com",
  messagingSenderId: "886165300431",
  appId: "1:886165300431:web:60b4b3fd44f93eeca003ba",
  measurementId: "G-95LTZZPW3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);