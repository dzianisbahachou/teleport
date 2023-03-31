import CommentEventItem from "../CommentEventItem/CommentEventItem";
import cl from './CommentEventsList.module.css';

export default function CommentEventsList({events}) {
    return (
        <div className={cl.list}>
            {events.map((item, index) => <CommentEventItem key={index} title={item.title} eventSubType={item.eventSubType}/>)}
        </div>
    );
}