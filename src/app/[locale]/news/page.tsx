import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const callouts = [
    {
      name: 'Italia',
      description: 'Lacrado en botellas, el ritual de conservar y distinguir al vino al que le llegó la hora de su mecanización',
      imageSrc: 'https://www.infocampo.com.ar/wp-content/uploads/2024/05/Lacre--e1716562755197.jpg',
      imageAlt: 'Botella',
      href: 'https://www.infocampo.com.ar/lacrado-en-botellas-el-ritual-de-conservar-y-distinguir-al-vino-al-que-le-llego-la-hora-de-su-mecanizacion/',
    },
    {
      name: 'Importaciones',
      description: '“Estamos esperando alguna normativa que motorice la importación de tecnologías vitivinícolas”',
      imageSrc: 'https://www.infocampo.com.ar/wp-content/uploads/2024/05/Enologia-vino-e1716397655720.jpg',
      imageAlt: 'Cilindros de Acero',
      href: 'https://www.infocampo.com.ar/estamos-esperando-alguna-normativa-que-motorice-la-importacion-de-tecnologias-vitivinicolas/',
    },
    {
      name: 'Sitevinitech',
      description: 'Exitosa participación de la CCI en SITEVINITECH 2024',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQWAy4Tmruo_iSKJpZ2ctHgj7vLFSsx4a8w&s',
      imageAlt: 'Mendoza news',
      href: '#',
    },
    {
      name: 'Tragedia en el Mar',
      description: 'La guardia costera italiana limita las posibilidades de hallar supervivientes del naufragio en Sicilia: "Creemos que están dentro del barco"',
      imageSrc: 'https://estaticos-cdn.prensaiberica.es/clip/2a329234-77e4-46be-b947-7faed8a2ae08_16-9-discover-aspect-ratio_default_0.jpg',
      imageAlt: 'World news',
      href: 'https://www.elperiodico.com/es/internacional/20240820/italia-busqueda-multimillonario-britanico-mike-lynch-naufragio-sicilia-107172497',
    },
    {
      name: 'Mendoza',
      description: 'Cambios para los comercios de Mendoza',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQWAy4Tmruo_iSKJpZ2ctHgj7vLFSsx4a8w&s',
      imageAlt: 'Mendoza news',
      href: '#',
    },
    {
      name: 'Global news',
      description: 'El las relaciones internacionales en Europa',
      imageSrc: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/media-assets/image/20240224_DE_US.jpg',
      imageAlt: 'World news',
      href: '#',
    },
    
   
    
  ]
  
  export default function NewsPage() {
    const t = useTranslations('NewsPage');
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')} </h2>
            <div className="min-h-0.5 bg-gray-200 mb-4 mt-4"></div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 mb-6">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  