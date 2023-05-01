import Container from '../UI/Container/Container';
import Gallery from '../Gallery/Gallery';
import classes from './About.module.css';

const About = () => {

    return (<div className={classes.back}>
        <Container>
            <div className={classes.wrapper}>
                <div className={classes['about-block']}>
                    <div className={classes.avatar}>
                        <img src='assets/mini1.webp' alt='Аватар'/>
                    </div>
                    <div className={classes.about}>
                        <span className={classes.title}>МЫ НАСТОЯЩИЕ ФАНАТЫ СВОЕГО ДЕЛА!</span>
                        <span className={classes.description}>Уже 2 года мы работаем над костюмами, репетируем конкурсы, отшиваем крутой реквизит, переигрываем сюжеты и сами немного остаемся детьми.
                        Телепорт – это не просто аниматоры! Это праздники, которые запоминаются надолго и с теплотой!
                        Наша задача, чтобы Вы отдохнули и насладились чудесным днем рождения Вашего малыша
                        Детские праздники в Бресте и Брестской области – приедем куда угодно!
                        Мы уже готовы создать лучший праздник для Вашего малыша!
                        </span>
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