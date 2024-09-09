import Image from "next/image";
import { useTranslations } from 'next-intl';

const people = [
  {
    name: 'Enrique PESCARMONA',
    role: 'PRESIDENTE',
    company: '-Grupo I.M.P.S.A',
    imageUrl:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    name: 'Guillermo ALTIERI',
    role: 'VICEPRESIDENTE',
    company: '-Altieri S.A.',
    imageUrl:
      'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Victoria CERVI',
    role: 'VICEPRESIDENTE',
    company: '-Tekno Argentina S.R.L.',
    imageUrl: "/traje.jpg",
  },
  {
    name: 'Ernesto DOMIZIO',
    role: 'TESORERO',
    company: '-Sabino Domizio S.A.',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Sergio MARTINI',
    role: 'TESORERO',
    company: '-Martini Cables',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Clara FRANCIOSI',
    role: 'CONSEJERO TITULAR',
    company: '-Barmatic',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Eduardo DE BLASI',
    role: 'CONSEJERO TITULAR',
    company: '-De Blasi S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Jesús SILVESTRINI',
    role: 'CONSEJERO TITULAR',
    company: '-Incotec S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Silvia CENTELEGHE',
    role: 'CONSEJERO TITULAR',
    company: '-Proplanta S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Victor TITTARELLI',
    role: 'CONSEJERO TITULAR',
    company: '-Endumel S.R.L.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Carlos CROTTA',
    role: 'CONSEJERO SUPLENTE',
    company: '-Bodega Crotta S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Luis PIAZZA',
    role: 'CONSEJERO SUPLENTE',
    company: '-Grupo Service Men S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Mario PALCHETTI',
    role: 'CONSEJERO SUPLENTE',
    company: '-Acys S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Orlando DAL POZZO',
    role: 'CONSEJERO SUPLENTE',
    company: '-Albion S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Jorge PERONE',
    role: 'REVISOR de CUENTAS TITULAR',
    company: '-I.M.P.S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Vicente TROVATO',
    role: 'REVISOR de CUENTA SUPLENTE',
    company: '-Frigorífico Trovato S.R.L.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Estanislao Pedro BAZIUK',
    role: 'SECRETARIO GENERAL',
    company: '',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Jorge D’ODORICO',
    role: 'PRESIDENTE San Luis',
    company: '',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Raul VARESE',
    role: 'VICEPRESIDENTE San Luis',
    company: '',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Corrado COMASTRI',
    role: 'TESORERO San Luis',
    company: '',
    imageUrl: "/traje2.jpg",
  },
  



  // More people...
]

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-32 gap-y-20 px-6 lg:px-1 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('header')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            {t('description')}<br/>
            {t('description1')}<br/>
            {t('description2')}<br/>
            {t('description3')}<br/>
            {t('description4')}<br/>            
          </p>
          <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            {t('descriptiontitle')}<br/>                       
          </p>
          <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title1')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            {t('descriptiontitle1')}<br/>                       
          </p>
          <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title3')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            {t('descriptiontitle3')}<br/>  
            {t('descriptiontitle31')}<br/> 
            {t('descriptiontitle32')}<br/> 
            {t('descriptiontitle33')}<br/> 
            {t('descriptiontitle34')}<br/>                      
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-1">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-2">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <h3 className="text-base leading-7 tracking-tight text-gray-900">{person.company}</h3>                  
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-20 mb-4">
        <Image
          src={"/organigrama.jpg"}
          alt={"img1"}
          width={600}
          height={600}
          />  
      </div>   
    </div>
  )
}
