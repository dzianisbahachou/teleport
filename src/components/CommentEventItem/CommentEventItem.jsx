import cl from './CommentEventItem.module.css';

export default function CommentEventItem({title, eventSubType}) {
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.jpg`
        : 'assets/logo/defaultEventLogo.jpg';
    
    return (
        <div className={cl.item}>
            <div className={cl['img-container']}>
                <img src={imgPath} alt={title} className={cl.img}/>
            </div>
            <div>
                {title}
            </div>
        </div>
    );
}