import { Link } from 'react-router-dom';
import cl from './EventItem.module.css';

export default function EventItem({data}) {
    const eventSubType = data.eventSubType;
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.jpg`
        : 'assets/logo/defaultEventLogo.jpg';

    return (
        <Link to={eventSubType}>
            <div className={cl.item}>
                <img className={cl.img} src={imgPath} alt={eventSubType}/>
            </div>
        </Link>
    );
}