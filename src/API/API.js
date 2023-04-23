import { 
    getDatabase,
    ref,
    child,
    get,
    push,
    set,
    orderByChild,
    equalTo,
    query,
} from 'firebase/database';

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
        const commentsRef = query(ref(db, 'comments'), orderByChild('eventSubType'), equalTo(eventType));
        const snapshot = await get(commentsRef);
        return snapshot;
    }

    static async createComment(payload) {
        const db = getDatabase();
        const commentsListRef = ref(db, 'comments');
        const newCommentRef = push(commentsListRef);
        await set(newCommentRef, payload);
        return;
    }

    static async getEvents(eventType) {
        const db = getDatabase();
        const eventsListRef = query(ref(db, 'events'), orderByChild('eventType'), equalTo(eventType));
        const snapshot = await get(eventsListRef);
        return snapshot;
    }

    static async getEventByEventSubType(eventSubType) {
        const db = getDatabase();
        const eventDetailsRef = query(ref(db, 'events'), orderByChild('eventSubType'), equalTo(eventSubType));
        const snapshot = await get(eventDetailsRef);
        return snapshot;
    }
}
