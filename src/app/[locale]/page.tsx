import {useTranslations} from 'next-intl';
import Sponsor from '../components/sections/Sponsor';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className="bg-gradient-to-r from-green-500 via-white to-red-500">
      
      <h1>{t('title')}</h1>
      <Sponsor />
      
    </main>
    

  ); 
  
}