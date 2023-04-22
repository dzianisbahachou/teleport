import { Link } from 'react-router-dom';
import cl from './AdditionItem.module.css';
import MainButton from '../UI/MainButton/MainButton';
import { convertEventType } from '../../util/firebaseResponseHandler';

export default function AdditionItem({data, location}) {
    const eventSubType = data;
    const title = convertEventType(eventSubType);
    const imgPath = eventSubType  
        ? `${process.env.PUBLIC_URL}/assets/logo/eventLogo/${eventSubType}.webp`
        : `${process.env.PUBLIC_URL}/assets/logo/defaultEventLogo.webp`;
    return (
        <Link to={`/${location}/${eventSubType}`} className={cl.item}>
            <div className={cl.action}>
                <MainButton className={cl.button}>Подробнее</MainButton>
            </div>
            <img className={cl.img} src={imgPath} alt={eventSubType}/>
            <span>{title}</span>
        </Link>
    );
}