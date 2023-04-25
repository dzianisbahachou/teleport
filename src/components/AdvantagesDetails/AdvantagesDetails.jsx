import classes from './AdvantagesDetails.module.css';

const AdvantagesDetails = props => {
    return(
        <div className={classes.details}>
            <div className={classes.text}>
                <h2 className={classes['sub-title']}>{props.title}</h2>
                <span className={classes['sub-description']}>{props.text}</span>
            </div>
            <img src={props.picture} className={classes['main-img']} alt='Большое лого достижений'/>
        </div>
    )
};

export default AdvantagesDetails;