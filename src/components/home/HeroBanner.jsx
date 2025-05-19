import {bannerList} from "../../utils/index.js";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

const colors = ["bg-banner-color-1, bg-banner-color-2", "bg-banner-color-3"];

export default () => {
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    const HeroBanner = () => {
        return (
            <div className="py-2 round-md">
                <Swiper grabCursor={true}
                        autoplay={{delay:4000, disableOnInteraction:false}}
                        navigation
                        modules={[Pagination, EffectFade, Navigation, Autoplay]}
                        pagination={{clickable:true}}
                        scrollbar=>{{draggable:true}}
                        slidesPerView={1}>
                    {bannerList.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[index]}`}>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="text-center">
                                        <h3 className='text-3xl text-white font-bold'>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}