import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <div className="bannerContainer">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="bannerSwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="img2"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
