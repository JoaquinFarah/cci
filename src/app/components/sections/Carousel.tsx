"use client"

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';   


interface Image {
  src: string;
  alt: string;
 }

const images: Image[] = [
  { src: '/banderaitalia.jpg', alt: 'bandera' },
  { src: '/buque.jpg', alt: 'boat' },
  { src: '/bolsa.jpg', alt: 'bank' },
  { src: '/hombresnegocio.jpg', alt: 'work' },
 
  
  
];

const MyCarousel: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className=" w-full h-96 ">
      <Slider {...settings} ref={setSliderRef}>
        {images.map((image) => (
          <div key={image.src} className="">
            <Image src={image.src} alt={image.alt} width={1000} height={1000}   />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MyCarousel;

