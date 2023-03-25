import cl from './CommentsList.module.css';
import CommentItem from '../CommentItem/CommentItem';

export default function CommentsList({comments}) {
    return (
        <div className={cl.comments}>
            <div>
                <h2>Что говорят наши клиенты</h2>
            </div>
            <div className={cl.list}>
                {comments.map(comment => <CommentItem key={comment.id} data={comment}/>)}
            </div>
        </div>    
    );
}