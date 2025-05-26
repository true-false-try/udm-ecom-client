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
                            <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[index]}`}>
                                <div className="flex flex-col items-center justify-center">
                                    <div className=" hidden lg:flex flex-col items-center w-1/2 p-8">
                                        <div className="text-center">
                                            <h3 className='text-3xl text-white font-bold'>{item.title}</h3>
                                            <h1 className='text-5xl text-white-bold mt-2'></h1>
                                            <p className='text-white font-bold mt-4'>{item.description}</p>
                                            <Link className='mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-g'
                                                  to="/products">
                                                Shop
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-center lg:w-1/2 p-4">
                                    <img src={item?.image} alt={item?.title}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}