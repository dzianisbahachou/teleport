import app from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function getCurrentUser() {
    return new Promise((res) => {
        const auth = getAuth();

        onAuthStateChanged(auth, user => {
            res(user);
        });
    });
}
