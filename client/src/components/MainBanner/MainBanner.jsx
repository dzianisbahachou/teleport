import classes from "./MainBanner.module.css";
import Container from "../UI/Container/Container";

const MainBanner = () => {
    return (<div className={classes.welcome}>
        <Container>
            <h1 className={classes.title}>Студия детских праздников в Бресте</h1>
            <p className={classes.description}>
                Дети верят в сказку, чудо и супер-героев и мы поможем им побывать в мире 
                сказок и поверить, что мечты по настоящему сбываются. Детские аниматоры 
                Арчи Шоу это прирождённые
            </p>
            <button className={classes["main-button"]}>Оставить заявку</button>
        </Container>
    </div>);
};

export default MainBanner;