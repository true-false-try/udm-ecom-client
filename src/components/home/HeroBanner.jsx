import { bannerList } from "../../utils/index.js";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

const colors = ["bg-banner-color-1", "bg-banner-color-2", "bg-banner-color-3"];

const HeroBanner = () => {
    return (
        <div className="py-2 rounded-md">
            <Swiper
                grabCursor={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                effect="fade"
                className="rounded-md"
            >
                {bannerList.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[index % colors.length]}`}>
                            <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
                                <div className="hidden lg:flex flex-col items-start justify-center w-1/2 p-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-left"
                                    >
                                        <h3 className='text-3xl text-white font-bold'>{item.title}</h3>
                                        <p className='text-white font-medium mt-4'>{item.description}</p>
                                        <Link
                                            to="/products"
                                            className='mt-6 inline-block bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800 transition'
                                        >
                                            Shop
                                        </Link>
                                    </motion.div>
                                </div>
                                <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
                                    <motion.img
                                        src={item?.image}
                                        alt={item?.title}
                                        className="max-h-full object-contain"
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;