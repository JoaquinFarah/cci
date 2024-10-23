"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslations } from 'next-intl';

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: '/banderaitalia.jpg', alt: 'bandera' },
  { src: '/Nos renovamos.jpg', alt: 'renew' },
  { src: '/SIMEI.jpg', alt: 'simei' },
  { src: '/Bigalia 2.jpg', alt: 'bigalia' }, 
  // { src: '/buque.jpg', alt: 'boat' },
  // { src: '/bolsa1.jpg', alt: 'bank' },
  // { src: '/hombresnegocio1.jpg', alt: 'coliseum' },
  
];

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null);

  const t = useTranslations('CarouselSection');

  return (    
    <section className="">
      
      <div className="h-auto w-full relative">     
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-auto mt-10">
            <Image
              src={image.src}
              alt={image.alt}
              // layout="fill"
              // objectFit="cover"
              width={2000}
              height={1000}
              className="object-center "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-black opacity-50" />
      </div>
    </section>
  );
};

export default CarouselSection;