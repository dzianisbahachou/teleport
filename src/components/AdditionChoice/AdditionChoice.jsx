import AdditionItem from '../AdditionItem/AdditionItem';
import cl from './AdditionChoice.module.css';

const AdditionChoice = ({data, location}) => {
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.title}>Возьмите с собой</h2>
            <ul className={cl.list}>
                {data.addition.map(event => <li key={event.id}><AdditionItem data={event} location={location}/></li>)}
            </ul>
    </div>);
};

export default AdditionChoice;