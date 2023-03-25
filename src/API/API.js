import { 
    getDatabase,
    ref,
    child,
    get,
    push,
    set,
    orderByChild,
    equalTo,
    query
} from "firebase/database";

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

    static async getComments() {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, 'comments'));
        return snapshot;
    }

    static async getComemntsForEvent(eventType) {
        const db = getDatabase();
        const comments = await query(ref(db, 'comments'), orderByChild('event_type'), equalTo(eventType));
        return comments;
    }

    static async createComment(payload) {
        const db = getDatabase();
        const commentsListRef = ref(db, 'comments');
        const newCommentRef = push(commentsListRef);
        await set(newCommentRef, payload);
        return;
    }
}
