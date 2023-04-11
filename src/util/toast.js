import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function messageToast(text) {
    toast(text, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
    });
}