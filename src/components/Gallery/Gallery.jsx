import { useState, useEffect } from "react";
import StorageAPICalls from "../../API/StorageAPI";
import Slider from "react-slick";
import cl from './Gallery.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import '../CommentsList/swiperStyle.css';

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

    const [swiperInstance, setSwiperInstance] = useState(undefined);

    if (swiperInstance) {
        swiperInstance.slideTo(0, 300);
    }

    return (
        <div className={cl.container}>
            <Swiper
                onSwiper={swiper => {setSwiperInstance(swiper)}}
                grabCursor={true}
                slidesPerView={1}
                slideToClickedSlide={false}
                pagination={{
                    dynamicBullets: true,
                  }}
                modules={[Pagination]}
                spaceBetween={40}
                breakpoints={{
                    2000: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    },
                    1800: {
                        slidesPerView: 4,
                        spaceBetween: 50
                    },
                    1000: {
                        slidesPerView: 4
                    },
                    850: {
                        slidesPerView: 3
                    },
                    550: {
                        slidesPerView: 2
                    }
                }}
            >
                {gallegy.map(item => 
                    <SwiperSlide>
                        <img src={item} width={width} height={height} className={cl.image}/>
                    </SwiperSlide>)}
            </Swiper>
        </div>  
    );
}