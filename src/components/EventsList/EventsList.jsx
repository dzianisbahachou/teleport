import cl from './EventsList.module.css';
import EventItem from '../EventItem/EventItem';

export default function EventsList({events, title}) {
    return (
        <>
            <h1 className={cl.title}>{title}</h1>
            <ul className={cl.list}>
                { events.map(event => <li key={event.id}><EventItem data={event}/></li>) }
            </ul>
        </>
    );
}