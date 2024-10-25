import CarouselSection from '../components/sections/Carousel';
import NewsSection from '../components/sections/News';
import ServiceSection from '../components/sections/Service';
import SponsorSection from '../components/sections/Sponsor';
import SocialMediaSection from '../components/sections/SocialNetwork';


export default function HomePage() {    
  return (
    <main className="bg-gradient-to-r from-green-500 via-white to-red-500">      
      <div>
        <CarouselSection />
        <ServiceSection/>
        <NewsSection/>
        <SocialMediaSection/>
        <SponsorSection />        
      </div>
    </main>
  ); 
}