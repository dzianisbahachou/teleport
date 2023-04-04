import Container from "../UI/Container/Container";
import classes from "./About.module.css";
import avatar from "../assets/magic-avatar.jpg";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import StorageAPICalls from "../../API/StorageAPI";

const About = () => {
  const [gallegy, setGallery] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await StorageAPICalls.getGalleryRef();
      res.items.forEach(async itemRef => {
        const url = await StorageAPICalls.getGalleryImage(itemRef);
        setGallery(prevState => {
          return [...prevState, url];
        });
      });
    }
    fetchImages();
  }, []);
    
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 100,
        cssEase: "ease",
        responsive: [
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

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
                    <Slider {...settings}>
                        {gallegy.map((item, index) => 
                          <div key={index}>
                            <img src={item} width="250px" style={{borderRadius: "50px"}}/>
                          </div>
                        )}
                        
                    </Slider>
                </div>
            </div>
        </Container>
    </div>);
};

export default About;