import classes from './AdvantagesDetails.module.css';

const AboutDetails = props => {
    return(
        <div className={classes.details}>
            <div>
                <p className={classes['sub-title']}>{props.title}</p>
                <p className={classes['sub-description']}>{props.text}</p>
            </div>
            <img src={props.picture} className={classes['main-img']} alt='Большое лого достижений'/>
        </div>
    )
};

export default AboutDetails;