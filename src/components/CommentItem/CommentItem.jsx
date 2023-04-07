import cl from './CommentItem.module.css';

export default function CommentItem({data}) {
    data.eventSubType =  'mickeyMouse';
    const imgPath = data.eventSubType 
        ? `assets/logo/eventLogo/${data.eventSubType}.png`
        : 'assets/logo/defaultEventLogo.png';

    return (
        <div className={cl.item}>
            <div className={cl.text}>
                <span className={cl.text}>{data.text}</span>
            </div>

            <img className={cl.image} src={imgPath} alt={imgPath} />

            <div className={cl.name}>
                <span>{data.name}</span>
            </div>             
        </div>
    );
}