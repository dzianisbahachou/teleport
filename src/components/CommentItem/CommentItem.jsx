import cl from './CommentItem.module.css';
import CommentImage from '../UI/CommentImage/CommentImage';

export default function CommentItem({data}) {
    const imgPath = data.eventSubType 
        ? `assets/logo/eventLogo/${data.eventSubType}.jpg`
        : 'assets/logo/defaultEventLogo.png';

    const onTextClick = () => {
        debugger
    };

    return (
        <div className={cl.item}>
            <div className={cl.text} onClick={onTextClick}>
                <p className={cl.test}>{data.text}</p>
            </div>

            <CommentImage imgPath={imgPath}/>

            <div className={cl.name}>
                <span>{data.name}</span>
            </div>             
        </div>
    );
}