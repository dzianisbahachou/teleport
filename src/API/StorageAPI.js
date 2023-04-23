import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

export default class StorageAPICalls {

    static async getEventLogo(eventType) {
        const storage = getStorage();
        const logoRef = ref(storage, `eventLogo/${eventType}.jpg`);
        const url = await getDownloadURL(logoRef);
        return url;
    }

    static async getGalleryRef(path) {
        const storage = getStorage();
        const listRef = ref(storage, path);
        const res = await listAll(listRef);
        return res;
    }

    static async getGalleryImage(itemRef) {
        const url = await getDownloadURL(itemRef);
        return url;
    }
}
