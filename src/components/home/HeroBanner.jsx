import {bannerList} from "../../utils/index.js";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {Link} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {Swiper, SwiperSlide} from 'swiper/react';

const HeroBanner = () => {
    return (
        <div className="py-2 rounded-md">
            <Swiper
                grabCursor={true}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                navigation={true}
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{clickable: true}}
                slidesPerView={1}
                loop={true}
            >
                {bannerList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="carousel-item rounded-md sm:h-[500px] h-96 bg-gradient-to-r from-slate-800 to-slate-600 flex flex-row items-center justify-between overflow-hidden">
                            <div className="hidden lg:flex flex-col items-start w-1/2 p-10">
                                <h3 className='text-3xl text-white font-bold'>{item.subtitle}</h3>
                                <h1 className='text-5xl text-white font-bold mt-2'>{item.title}</h1>
                                <p className='text-slate-300 font-medium mt-4'>{item.description}</p>
                                <Link
                                    className='mt-6 inline-block bg-white text-slate-800 font-semibold py-2 px-6 rounded hover:bg-slate-100 transition'
                                    to="/products"
                                >
                                    Shop Now
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;
