import Container from "../UI/Container/Container";
import classes from "./About.module.css";

const About = () => {
    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes["about-block"]}>
                    <div className={classes.avatar}>Avatar</div>
                    <div className={classes.about}>
                        <p className={classes.title}>О нас</p>
                        <p className={classes.description}>Мы самые классные мы ваще топ самый топ я люблю тапку в пол давать гэээээнь </p>
                    </div>
                </div>
                <div className={classes.gallery}></div>
            </div>
        </Container>
    );
};

export default About;