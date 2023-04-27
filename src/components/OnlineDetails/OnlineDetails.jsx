import classes from './OnlineDetails.module.css';

const AnimatorDetails = ({data}) => {
    debugger
    const imgPath = data  
    ? `${process.env.PUBLIC_URL}/assets/logo/eventLogo/${data.eventSubType}.webp`
    : `${process.env.PUBLIC_URL}/assets/logo/defaultEventLogo.webp`;

    return (<div className={classes.wrapper}>
            <div className={classes['about-block']}>
                <div className={classes.about}>
                    <p className={classes.title}>{data.title}</p>
                    <p className={classes.description}>{data.description}</p>
                </div>
                <div className={classes.avatar}>
                    <img src={imgPath}/>
                </div>
            </div>
    </div>);
};

export default AnimatorDetails;