import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cl from './EventItem.module.css';
import StorageAPICalls from '../../API/StorageAPI';

export default function EventItem({data}) {
    const [imgURL, setImgURL] = useState('assets/logo/defaultEventLogo.jpg');
    const eventType = data.eventType;

    useEffect(() => {
        async function fetchEventLogo() {
            const url = await StorageAPICalls.getEventLogo(eventType);
            debugger
            setImgURL(url);
        }
        fetchEventLogo();
    }, []);

    const onEventClick = () => {

    }

    return (
        <Link to={eventType}>
            <div className={cl.item} onClick={onEventClick}>
                <img className={cl.img} src={imgURL} alt={eventType}/>
            </div>
        </Link>
    );
}