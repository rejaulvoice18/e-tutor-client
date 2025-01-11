import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ShowOffSlide from './ShowOffSlide';
import axios from 'axios';
const ShowOfBanner = () => {
    const [showOff, setShowOff] = useState([])

    useEffect(() => {
        const loadAllreviewShow = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/show-off`)
            setShowOff(data)
        }
        loadAllreviewShow()
    }, [])
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
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                showOff.map(review => <SwiperSlide key={review._id}>
                    <ShowOffSlide
                        
                        reviews={review}
                    ></ShowOffSlide>
                    </SwiperSlide>)
            }
        </Swiper>
    </div>
    );
};

export default ShowOfBanner;
