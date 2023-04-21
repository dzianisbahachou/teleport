import { Link } from 'react-router-dom';
import cl from './EventItem.module.css';
import MainButton from '../UI/MainButton/MainButton';

export default function EventItem({data}) {
    const eventSubType = data.eventSubType;
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.webp`
        : 'assets/logo/defaultEventLogo.webp'; 

    return (
        <Link to={eventSubType} className={cl.item}>
            <div className={cl.action}>
                <MainButton className={cl.button}>Подробнее</MainButton>
            </div>
            <img className={cl.img} src={imgPath} alt={eventSubType}/>
            <span>{data.title}</span>
        </Link>
    );
}
