import cl from './CommentItem.module.css';
import { convertEventType } from '../../util/firebaseResponseHandler';
import CommentImage from '../UI/CommentImage/CommentImage';

export default function CommentItem({data}) {
    const eventType = convertEventType(data.event_type);
    return (
        <>
            <div className={cl['item-full-size']}>
                <CommentImage />
                <div className={cl.comment}>
                    <div className={cl.title}>{eventType}</div>
                    <p>{data.text}</p>
                    <div className={cl.name}>
                        <p>- {data.name}</p>
                    </div>
                </div>
            </div>

            <div className={cl['item-small-size']}>
                <div className={cl.header}>
                    <CommentImage />
                    <div className={cl.title}>{eventType}</div>
                </div>
                <div className={cl.comment}>
                    <p>{data.text}</p>
                    <div className={cl.name}>
                        <span>- {data.name}</span>
                    </div>
                </div>
            </div>
        </> 
    );
}