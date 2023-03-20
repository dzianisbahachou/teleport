import Container from "../UI/Container/Container";
import classes from "./About.module.css";
import avatar from "../assets/magic-avatar.jpg";

const About = () => {
    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes["about-block"]}>
                    <div className={classes.avatar}>
                        <img src={avatar}/>
                    </div>
                    <div className={classes.about}>
                        <p className={classes.title}>О нас</p>
                        <p className={classes.description}>Мы самые классные мы ваще топ самый топ я люблю тапку в пол давать гэээээнь </p>
                    </div>
                </div>
                <div className={classes.gallery}>
                    Gallery
                </div>
            </div>
        </Container>
    );
};

export default About;