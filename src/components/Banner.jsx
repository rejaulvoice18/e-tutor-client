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
            <SwiperSlide><img src="https://i.ytimg.com/vi/eaQeF1cXVxQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDzDoYG4oA379gseQIWWoxx6QQIQ" className='h-[500px] w-full' alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://nuoi.missaoportugal.mne.gov.pt/images/fundo_de_pagina_portugues_3.0_0.jpg" className='h-[500px] w-full' alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://media.istockphoto.com/id/1447182124/vector/arabic-language-day-international-day-of-arabic-day-by-unesco-arabic-calligraphy-vector.jpg?s=612x612&w=0&k=20&c=35pMrG9Xxpm9z7A3blQY9iE7qWBsVMw996APJddwRTU=" className='h-[500px] w-full' alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://woodsidepawprint.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-02-at-10.27.03-AM-900x499.png" className='h-[500px] w-full' alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://media.licdn.com/dms/image/v2/D5612AQH9tDnO6eInQA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681637070491?e=2147483647&v=beta&t=bs0NvcFLgh7AkBzXjfguXiBknjy9HC6u6kV0dm6h-0M" className='h-[500px] w-full' alt="" /></SwiperSlide>
            
            
        </Swiper>
    </div>
    );
};

export default Banner;