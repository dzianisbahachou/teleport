import EventItem from "../EventItem/EventItem";
import cl from "./AdditionChoice.module.css";

const AdditionChoice = () => {
    let data = [{
        description:"какое-то описание Скай",
        eventSubType:"sky",
        eventType:"animators",
        id:"1",
        price:123,
        title:"Скай"
    },
    {
        description:"какое-то описание Скай",
        eventSubType:"clown",
        eventType:"animators",
        id:"1",
        price:123,
        title:"Clown"
    },
    {
        description:"какое-то описание Скай",
        eventSubType:"mickeyMouse",
        eventType:"animators",
        id:"1",
        price:123,
        title:"mini mouse"
    },
    {
        description:"какое-то описание Скай",
        eventSubType:"mickeyMouse",
        eventType:"animators",
        id:"1",
        price:123,
        title:"mini mouse"
    }]
    return (
        <div className={cl.wrapper}>
            <ul className={cl.list}>
                { data.map(event => <li key={event.id}><EventItem width="15vw" data={event}/></li>) }
            </ul>
    </div>);
};

export default AdditionChoice;