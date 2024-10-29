import CarouselSection from './components/sections/Carousel';
import NewsSection from './components/sections/News';
import ServiceSection from './components/sections/Service';
import SponsorSection from './components/sections/Sponsor';
import SocialMediaSection from './components/sections/SocialNetwork';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="bg-gradient-to-r from-green-500 via-white to-red-500">      
    <div>
      <CarouselSection />
      <ServiceSection/>
      <NewsSection/>
      <SocialMediaSection/>
      <SponsorSection />  
      <Footer/>      
    </div>
     {/* <p>mi cuenta github - gmail: clientesyservicioscci/ supabase: CCImendoza2024!</p> */}
  </main>    
    
  );
}
