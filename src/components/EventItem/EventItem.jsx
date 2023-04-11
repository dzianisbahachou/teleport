import { Link } from 'react-router-dom';
import cl from './EventItem.module.css';

export default function EventItem({data}) {
    // const eventSubType = data.eventSubType;
    const eventSubType = 'mickeyMouse';
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.webp`
        : 'assets/logo/defaultEventLogo.webp'; 

    return (
        <Link to={eventSubType} className={cl.item}>
            <img className={cl.img} src={imgPath} alt={eventSubType}/>
            <span>{data.title}</span>
        </Link>
    );
}