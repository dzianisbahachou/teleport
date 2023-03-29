import Container from "../UI/Container/Container";
import classes from "./About.module.css";
import avatar from "../assets/magic-avatar.jpg";
import Slider from "react-slick";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";

const About = () => {
  const [gallegy, setGallery] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const storage = getStorage();
      const listRef = ref(storage, 'gallery');
      const res = await listAll(listRef);
      res.items.forEach(async itemRef => {
        const url = await getDownloadURL(itemRef);
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
                    <Slider {...settings}>
                        {gallegy.map((item, index) => 
                          <div key={index}>
                            <img src={item} width="250px" height="300px" style={{borderRadius: "50px"}}/>
                          </div>
                        )}
                        
                    </Slider>
                </div>
            </div>
        </Container>
    );
};

export default About;