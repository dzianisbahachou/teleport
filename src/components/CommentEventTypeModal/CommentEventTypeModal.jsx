import cl from './CommentEventTypeModal.module.css';
import CommentEventsList from '../CommentEventsList/CommentEventsList';
import { useState, useEffect } from 'react';
import APICalls from '../../API/API';
import { convertResponse, convertResponseCode } from '../../util/firebaseResponseHandler';
import { json } from 'react-router-dom';


const CommentEventTypeModal = ({closeModal}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const snapshot = await APICalls.getEvents('animators');
                
                if (!snapshot.exists()) {
                    throw new Error();
                }
        
                const value = snapshot.val();
                const events = convertResponse(value);
        
                setEvents(events);
            } catch(e) {
                const message = convertResponseCode(e.message);
        
                throw json(
                    { message },
                    { status: 500 }
                );
            }
        }

        fetchEvents();
    }, []);

    return (
        <div className={cl.wpapper} onClick={closeModal}>
            <div className={cl.content} onClick={e => e.stopPropagation()}>
                <CommentEventsList events={events} />
            </div>
        </div>
    );
}

export default CommentEventTypeModal;