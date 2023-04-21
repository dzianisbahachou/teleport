import classes from "./AnimatorDetails.module.css";
import Container from "../UI/Container/Container";
import AdditionChoice from "../AdditionChoice/AdditionChoice";

const AnimatorDetails = () => {

    return (<div className={classes.wrapper}>
        <Container>
            <div className={classes["about-block"]}>
                <div className={classes.about}>
                    <p className={classes.title}>МЫ НАСТОЯЩИЕ ФАНАТЫ СВОЕГО ДЕЛА!</p>
                    <p className={classes.description}>Уже 2 года мы работаем над костюмами, репетируем конкурсы, отшиваем крутой реквизит, переигрываем сюжеты и сами немного остаемся детьми.
                    Телепорт – это не просто аниматоры! Это праздники, которые запоминаются надолго и с теплотой!
                    Наша задача, чтобы Вы отдохнули и насладились чудесным днем рождения Вашего малыша
                    Детские праздники в Бресте и Брестской области – приедем куда угодно!
                    Наша студия устраивает для детей выездные праздник
                    </p>
                </div>
                <div className={classes.avatar}>
                    <img src="/assets/mini1.webp"/>
                </div>
            </div>
            <AdditionChoice/>
        </Container>
    </div>);
};

export default AnimatorDetails;