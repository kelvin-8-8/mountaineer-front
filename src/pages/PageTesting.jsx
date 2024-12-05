import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PageTesting() {

    const images = [
      "/Mountain.jpg",
      "https://via.placeholder.com/1080x800?text=Slide+2",
      "https://via.placeholder.com/800x400?text=Slide+3",
      "https://via.placeholder.com/800x400?text=Slide+4",
    ]
   
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg shadow-lg max-w-screen-xl"
        >
          {/* array.map(function(currentValue, index, arr), thisValue) */}
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-500px bg-gray-200">
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
      <div className="flex flex-col justify-center items-center bg-red-200 h-96">
        <h1 className="block text-2xl m-6 mb-12">關於我們</h1>
        <p className="block m-6">簡述</p>
      </div>
        
    </>


  );
}
