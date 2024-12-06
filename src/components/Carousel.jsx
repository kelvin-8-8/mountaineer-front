import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {

  const images = [
    "/Mountain.jpg",
    "https://via.placeholder.com/1080x800?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
  ]

  return (
    <div className="flex flex-row justify-center items-center w-full z-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Keep autoplay running after user interactions
        }}
        className="rounded-lg shadow-lg max-w-screen-3xl h-96 md:h-500px"
      >
        {/* array.map(function(currentValue, index, arr), thisValue) */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-96 md:h-500px bg-gray-200">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
