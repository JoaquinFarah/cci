import Image from "next/image";
import { useTranslations } from 'next-intl';

const people = [
  {
    name: 'Pedro Santander',
    role: 'Founder',
    imageUrl:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    name: 'Pedro Armando Santander',
    role: 'CEO',
    imageUrl:
      'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Juan Armando Estevez',
    role: 'Business Leader',
    imageUrl: "/traje.jpg",
  },
  {
    name: 'Oliverio Gabrieli',
    role: 'Group Leader',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Martin Cabezas',
    role: 'Secretario',
    imageUrl: "/traje2.jpg",
  },
  



  // More people...
]

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('header')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('description')}
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
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
