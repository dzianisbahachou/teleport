import cl from './CommentEventItem.module.css';
import EventLogo from '../UI/EventLogo/EventLogo';

export default function CommentEventItem({title, eventSubType, onClick}) {
    eventSubType =  'mickeyMouse';
    
    const onItemClick = () => {
        onClick(eventSubType);
    }
    
    return (
        <div className={cl.item} onClick={onItemClick}>
            <div className={cl['img-container']}>
                <EventLogo eventSubType={eventSubType} alt={title} height={50}/>
            </div>
            <div>
                {title}
            </div>
        </div>
    );
}