import cl from './CommentEventTypeModal.module.css';
import CommentEventsList from '../CommentEventsList/CommentEventsList';
import { useState, useEffect } from 'react';
import APICalls from '../../API/API';
import { convertResponse } from '../../util/firebaseResponseHandler';
import NewCommentLoader from '../UI/NewCommentLoader/NewCommentLoader';


const CommentEventTypeModal = ({closeModal, onEventTypeClick}) => {
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
                // message toast
            }
        }

        fetchEvents();
    }, []);

    return (
        <div className={cl.wpapper} onClick={closeModal}>
            <div className={cl.content} onClick={e => e.stopPropagation()}>
                { !events.length && <NewCommentLoader/> }
                <CommentEventsList events={events} onSelect={onEventTypeClick}/>
            </div>
        </div>
    );
}

export default CommentEventTypeModal;