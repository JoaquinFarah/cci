"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: '/banderaitalia.jpg', alt: 'bandera' },
  { src: '/Nos renovamos.jpg', alt: 'renew' },
  { src: '/SIMEI2.png', alt: 'simei' },
  
];

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="">
      <div className="h-auto w-full relative">
        <Swiper
          modules={[Navigation, Autoplay]} // Agrega módulos necesarios
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 5000 }} // Autoplay cada 5 segundos
          loop={true} // Hace que el carrusel sea infinito
          navigation // Activa las flechas de navegación
          
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="h-auto mt-10">
              <Image
                src={image.src}
                alt={image.alt}
                width={2000}
                height={1000}
                className="object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
};

export default CarouselSection;
