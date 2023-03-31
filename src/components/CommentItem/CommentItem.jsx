import cl from './CommentItem.module.css';
import { convertEventType } from '../../util/firebaseResponseHandler';
import CommentImage from '../UI/CommentImage/CommentImage';

export default function CommentItem({data}) {
    const title = convertEventType(data.eventSubType);

    const imgPath = data.eventSubType 
        ? `assets/logo/eventLogo/${data.eventSubType}.jpg`
        : 'assets/logo/defaultEventLogo.jpg';

    return (
        <>
            <div className={cl['item-full-size']}>
                <CommentImage imgPath={imgPath}/>
                <div className={cl.comment}>
                    <div className={cl.title}>{title}</div>
                    <p>{data.text}</p>
                    <div className={cl.name}>
                        <p>- {data.name}</p>
                    </div>
                </div>
            </div>

            <div className={cl['item-small-size']}>
                <div className={cl.header}>
                    <CommentImage imgPath={imgPath}/>
                    <div className={cl.title}>{title}</div>
                </div>
                <div className={cl.comment}>
                    <p>{data.text}</p>
                    <div className={cl.name}>
                        <span>- {data.name}</span>
                    </div>
                </div>
            </div>
        </> 
    );
}