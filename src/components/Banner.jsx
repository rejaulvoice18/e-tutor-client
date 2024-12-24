import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
    return (
        <div className='my-3 w-11/12 mx-auto'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-an-image-of-sports-equipment-and-equipment-image_13168221.jpg" className='h-[500px] w-full' alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://c8.alamy.com/comp/CXFYK3/sports-equipment-on-a-black-background-CXFYK3.jpg" className='h-[500px] w-full' alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://st3.depositphotos.com/3591429/18305/i/1600/depositphotos_183057156-stock-photo-sports-tools-green-grass-concept.jpg" className='h-[500px] w-full' alt="" /></SwiperSlide>
            
            
        </Swiper>
    </div>
    );
};

export default Banner;