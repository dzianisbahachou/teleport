import cl from './CommentItem.module.css';
import EventLogo from '../UI/EventLogo/EventLogo';

export default function CommentItem({data}) {
    const imgPath = data.eventSubType;
debugger
    return (
        <div className={cl.item}>
            <div className={cl.text}>
                <span className={cl.text}>{data.text}</span>
            </div>

            <EventLogo eventSubType={imgPath} alt={imgPath} height={130}/>

            <div className={cl.name}>
                <span>{data.name}</span>
            </div>
        </div>
    );
}