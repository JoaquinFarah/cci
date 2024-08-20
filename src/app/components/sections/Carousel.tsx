"use client"

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image from 'next/image';   


// interface Image {
//   src: string;
//   alt: string;
//  }

// const images: Image[] = [
//   { src: '/banderaitalia.jpg', alt: 'bandera' },
//   { src: '/buque.jpg', alt: 'boat' },
//   { src: '/bolsa.jpg', alt: 'bank' },
//   { src: '/hombresnegocio.jpg', alt: 'work' },   
// ];

// const MyCarousel: React.FC = () => {
//   const [sliderRef, setSliderRef] = useState<any>(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <section className=" w-full h-96 ">
//       <Slider {...settings} ref={setSliderRef}>
//         {images.map((image) => (
//           <div key={image.src} className="">
//             <Image src={image.src} alt={image.alt} width={800} height={800}  />
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default MyCarousel;

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
  { src: '/buque.jpg', alt: 'boat' },
  // { src: '/bolsa1.jpg', alt: 'bank' },
  // { src: '/bolsa.jpg', alt: 'bank' },
  // { src: '/hombresnegocio1.jpg', alt: 'coliseum' },
  { src: '/hombresnegocio.jpg', alt: 'work' },
];

const Carousel = () => {
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
          <SwiperSlide key={index} className="h-auto mt-2">
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

export default Carousel;