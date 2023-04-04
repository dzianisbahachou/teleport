import cl from './AnimatorsList.module.css';
import EventItem from '../EventItem/EventItem';

export default function AnimatorsList({animators}) {

    return (
        <>
            <h1 className={cl.title}>НАШИ АНИМАТОРЫ</h1>
            <ul className={cl.list}>
                {
                animators?.length 
                    ? animators.map(animator => <li key={animator.id}><EventItem data={animator}/></li>)
                    : <p>Нет ничего </p>
                }
            </ul>
        </>
    );
}