import { getDatabase, ref, child, get, push, set } from "firebase/database";

export default class APICalls {

    static async getUsers() {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, 'users'));
        return snapshot;
    }

    static async createUser(payload) {
        const db = getDatabase();
        const usersListRef = ref(db, 'users');
        const newUserRef = push(usersListRef);
        await set(newUserRef, payload);
        return;
    }
}
