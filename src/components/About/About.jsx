import Container from "../UI/Container/Container";
import classes from "./About.module.css";
import avatar from "../assets/magic-avatar.jpg";
import Slider from "react-slick";

const About = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 100,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                        <img src={avatar} width="250px"/>
                        </div>
                        <div>
                        <img src={avatar} width="250px"/>
                        </div>
                        <div>
                        <img src={avatar} width="250px"/>
                        </div>
                        <div>
                        <img src={avatar} width="250px"/>
                        </div>
                        <div>
                        <img src={avatar} width="250px"/>
                        </div>
                        <div>
                        <img src={avatar} width="250px"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </Container>
    );
};

export default About;