import CommentEventItem from "../CommentEventItem/CommentEventItem";

export default function CommentEventsList({events, onSelect}) {
    return (
        <div>
            {events.map((item, index) => <CommentEventItem key={index} title={item.title} eventSubType={item.eventSubType} onClick={onSelect}/>)}
        </div>
    );
}