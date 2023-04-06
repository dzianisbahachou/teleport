import cl from './CommentsList.module.css';
import CommentItem from '../CommentItem/CommentItem';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import './swiperStyle.css';

export default function CommentsList({comments}) {

    return (
        <div className={cl.container}>
            <h1>Что творят мужчины</h1>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                slideToClickedSlide={true}
                loop={true}
                pagination={false}
                spaceBetween={40}
                modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                    2000: {
                        slidesPerView: 5
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
                    <SwiperSlide key={comment.id}>
                        <CommentItem data={comment}/>
                    </SwiperSlide>)}
            </Swiper>
        </div>  
    );
}