import cl from './CommentEventTypeModal.module.css';
import CommentEventsList from '../CommentEventsList/CommentEventsList';


const CommentEventTypeModal = ({closeModal}) => {
    const dummy = ['spidermane', 'asdsad', 'asdsad', 'sadsada']

    return (
        <div className={cl.wpapper} onClick={closeModal}>
            <div className={cl.content} onClick={e => e.stopPropagation()}>
                <CommentEventsList events={dummy} />
            </div>
        </div>
    );
}

export default CommentEventTypeModal;