import cl from './CommentEventItem.module.css';

export default function CommentEventItem({title, eventSubType, onClick}) {
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.jpg`
        : 'assets/logo/defaultEventLogo.jpg';

    const onItemClick = () => {
        onClick(eventSubType);
    }
    
    return (
        <div className={cl.item} onClick={onItemClick}>
            <div className={cl['img-container']}>
                <img src={imgPath} alt={title} className={cl.img}/>
            </div>
            <div>
                {title}
            </div>
        </div>
    );
}