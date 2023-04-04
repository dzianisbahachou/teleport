import cl from './AnimatorsList.module.css';
import EventItem from '../EventItem/EventItem';
import Container from '../UI/Container/Container';

export default function AnimatorsList({animators}) {

    return (
        <Container>
            <ul className={cl.list}>
                {
                animators?.length 
                    ? animators.map(animator => <li key={animator.id}><EventItem data={animator}/></li>)
                    : <p>Нет ничего </p>
                }
            </ul>
        </Container>
    );
}