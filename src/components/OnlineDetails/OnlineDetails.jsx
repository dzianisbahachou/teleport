import classes from './OnlineDetails.module.css';
import { convertEventType } from '../../util/firebaseResponseHandler';

const OnlineDetails = ({data}) => {
    const imgPath = data.addition
    ? `${process.env.PUBLIC_URL}/assets/logo/eventLogo/${data.addition.eventSubType}.webp`
    : `${process.env.PUBLIC_URL}/assets/logo/defaultEventLogo.webp`;

    return (<div className={classes.wrapper}>
            <div className={classes['about-block']}>
                <div className={classes.about}>
                    <p className={classes.title}>{data.addition.title}</p>
                    <p className={classes.description}>{data.addition.description}</p>
                </div>
                <div className={classes.avatar}>
                    <img src={imgPath}/>
                </div>
            </div>
    </div>);
};

export default OnlineDetails;