import { useState, useEffect } from 'react';
import StorageAPICalls from '../../API/StorageAPI';
import cl from './GalleryAbout.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default function GalleryAbout({imgPath}) {
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
    }, [imgPath]);

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
                loop={true}
                slideToClickedSlide={false}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                spaceBetween={40}
                className={cl.swiper}
                breakpoints={{
                    2000: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1800: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    1000: {
                        slidesPerView: 3
                    },
                    850: {
                        slidesPerView: 3
                    },
                    550: {
                        slidesPerView: 2
                    }
                }}
            >
                {gallegy.map((item, index) => 
                    <SwiperSlide key={index} className={cl.slide}>
                        <img src={item} className={cl.image} alt='Фото из галереи'/>
                    </SwiperSlide>)}
            </Swiper>
        </div>  
    );
}