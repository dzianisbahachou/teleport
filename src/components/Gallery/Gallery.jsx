import { useState, useEffect } from "react";
import StorageAPICalls from "../../API/StorageAPI";
import Slider from "react-slick";
import cl from './Gallery.module.css';

const settings = {
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

export default function Gallery({imgPath, width='250', height='300'}) {
    const [gallegy, setGallery] = useState([]);

    useEffect(() => {
        async function fetchImages() {
          const res = await StorageAPICalls.getGalleryRef(imgPath);
          res.items.forEach(async itemRef => {
            const url = await StorageAPICalls.getGalleryImage(itemRef);
            setGallery(prevState => {
              return [...prevState, url];
            });
          });
        }
        fetchImages();
    }, []);

    return (
        <Slider {...settings}>
            {gallegy.map((item, index) => 
                <div key={index}>
                    <img src={item} width={width} height={height} className={cl.image}/>
                </div>
            )}
        </Slider>
    );
}