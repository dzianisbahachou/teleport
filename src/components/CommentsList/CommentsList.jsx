import cl from './CommentsList.module.css';
import CommentItem from '../CommentItem/CommentItem';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default React.memo(function CommentsList({comments}) {
    const [swiperInstance, setSwiperInstance] = useState(undefined);

    if (swiperInstance) {
        swiperInstance.slideTo(0, 300);
    }

    return (
        <div className={cl.container}>
            <h1 className={cl.title}>Что говорят мужчины</h1>
            <Swiper
                onSwiper={swiper => {setSwiperInstance(swiper)}}
                grabCursor={true}
                slidesPerView={1}
                slideToClickedSlide={true}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                spaceBetween={40}
                className={cl.swiper}
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
                {comments.map(comment => 
                    <SwiperSlide key={comment.id} className={cl.slide}>
                        <CommentItem data={comment}/>
                    </SwiperSlide>)}
            </Swiper>
        </div>  
    );
})