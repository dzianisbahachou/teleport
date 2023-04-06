import cl from './CommentsList.module.css';
import CommentItem from '../CommentItem/CommentItem';
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import './swiperStyle.css';

export default function CommentsList({comments}) {
    const [slidesCount, setSlidesCount] = useState(4);
    

    const resizeSlider = () => {
        const clientWidth = window.innerWidth;
        let slidesCount = 4;

        if (clientWidth > 2000) {
            slidesCount = 5;
        } else if (clientWidth < 1000 && clientWidth > 850) {
            slidesCount = 3;
        } else if (clientWidth < 850 && clientWidth > 550) {
            slidesCount = 2;
        } else if (clientWidth < 550) {
            slidesCount = 1;
        }
        setSlidesCount(slidesCount);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeSlider);
        resizeSlider();
        return () => {
            window.removeEventListener("resize", resizeSlider);
        };
    }, []);

    return (
        <div className={cl.container}>
            <h1>Что творят мужчины</h1>
            <Swiper
                grabCursor={true}
                slidesPerView={slidesCount}
                slideToClickedSlide={true}
                loop={true}
                pagination={true}
                spaceBetween={40}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {comments.map(comment => 
                    <SwiperSlide key={comment.id}>
                        <CommentItem data={comment}/>
                    </SwiperSlide>)}
            </Swiper>
        </div>  
    );
}