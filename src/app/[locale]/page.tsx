import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import CarouselSection from '../components/sections/Carousel';
import NewsSection from '../components/sections/News';
import ServiceSection from '../components/sections/Service';
import SponsorSection from '../components/sections/Sponsor';
import WhatWeDo from '../components/sections/Service';



export default function HomePage({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <main className="bg-gradient-to-r from-green-500 via-white to-red-500">
      
      <div>
        <CarouselSection />
        <ServiceSection/>
        <NewsSection/>
        <SponsorSection />
        
      </div>
    </main>
    

  ); 
  
}