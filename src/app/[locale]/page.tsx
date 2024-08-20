import {useTranslations} from 'next-intl';
import Sponsor from '../components/sections/Sponsor';
import {unstable_setRequestLocale} from 'next-intl/server';
import Carousel from '../components/sections/Carousel';
import NewsSection from '../components/sections/News';



export default function HomePage({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <main className="bg-gradient-to-r from-green-500 via-white to-red-500">
      
      <div className="">
      
        <Carousel />
        <NewsSection/>
        <Sponsor />
      </div>
    </main>
    

  ); 
  
}