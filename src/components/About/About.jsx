import Container from "../UI/Container/Container";
import classes from "./About.module.css";
import Gallery from "../Gallery/Gallery";

const About = () => {

    return (<div className={classes.back}>
        <Container>
            <div className={classes.wrapper}>
                <div className={classes["about-block"]}>
                    <div className={classes.avatar}>
                        <img src="assets/mini1.png"/>
                    </div>
                    <div className={classes.about}>
                        <p className={classes.title}>МЫ НАСТОЯЩИЕ ФАНАТЫ СВОЕГО ДЕЛА!</p>
                        <p className={classes.description}>Уже 2 года мы работаем над костюмами, репетируем конкурсы, отшиваем крутой реквизит, переигрываем сюжеты и сами немного остаемся детьми.
                        Телепорт – это не просто аниматоры! Это праздники, которые запоминаются надолго и с теплотой!
                        Наша задача, чтобы Вы отдохнули и насладились чудесным днем рождения Вашего малыша
                        Детские праздники в Бресте и Брестской области – приедем куда угодно!
                        Наша студия устраивает для детей выездные праздники на любой адрес – будь то ваша квартира, загородный дом, кафе, школа или детский сад. 
                        Забронировать волшебный праздник с нашей студией легко – оставляйте заявку на нашем сайте, либо звоните нам по номеру: +375(29)830-97-32. 
                        Мы уже готовы создать лучший праздник для Вашего малыша!
                        </p>
                    </div>
                </div>
                <div className={classes.gallery}>
                    <Gallery imgPath='gallery'/>
                </div>
            </div>
        </Container>
    </div>);
};

export default About;