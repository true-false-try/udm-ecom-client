import {bannerList} from "../../utils/index.js";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {Link} from "react-router-dom";
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";


const colors = ["bg-banner-color-1, bg-banner-color-2", "bg-banner-color-3"];

export default () => {

    const HeroBanner = () => {
        return (
            <div className="py-2 round-md">
                <Swiper grabCursor={true}
                        autoplay={{delay:4000, disableOnInteraction:false}}
                        navigation
                        modules={[Pagination, EffectFade, Navigation, Autoplay]}
                        pagination={{ clickable:true }}
                        scrollbar={{ draggable: true }}
                        slidesPerView={1}>
                    {bannerList.map((item, index) => (
                        <SwiperSlide key={item.id}>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}