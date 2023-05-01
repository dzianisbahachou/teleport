import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import cl from './AdvantagesSwiper.module.css';

const AdvantagesSwiper = ({onChange}) => {

    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={false}
            slidesPerView={1}
            slidesPerGroupAuto={1}
            spaceBetween={30}
            onActiveIndexChange={onChange}
            coverflowEffect={{
                rotate: 190,
                stretch: 110,
                depth: 100,
                modifier: 0.5,
                slideShadows: false
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={cl.swiper}>
            <SwiperSlide className={cl.slide}>
                <img src='assets/logo/eventLogo/mickeyMouse.webp' alt='Аватар'/>
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
                <img src='assets/logo/eventLogo/bumblebee.webp' alt='Аватар'/>
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
                <img src='assets/logo/eventLogo/pion.webp' alt='Аватар'/>
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
                <img src='assets/logo/eventLogo/sky.webp' alt='Аватар'/>
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
                <img src='assets/logo/eventLogo/gvenStacy.webp' alt='Аватар'/>
            </SwiperSlide>
        </Swiper>
    );
};

export default AdvantagesSwiper;