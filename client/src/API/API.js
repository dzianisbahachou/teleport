import { getDatabase, ref, child, get } from "firebase/database";

export default class APICalls {

    static async getUsers() {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, 'userss'));
        return snapshot;
    }
}
