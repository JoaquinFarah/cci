import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const callouts = [
    {
      name: 'Economic news',
      description: 'Milei y el cepo al dolar',
      imageSrc: 'https://about.fb.com/wp-content/uploads/2024/02/Facebook-News-Update_US_AU_Header.jpg?w=1920',
      imageAlt: 'Economic news',
      href: '/',
    },
    {
      name: 'Global news',
      description: 'El las relaciones internacionales en Europa',
      imageSrc: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/media-assets/image/20240224_DE_US.jpg',
      imageAlt: 'World news',
      href: '#',
    },
    {
      name: 'Mendoza',
      description: 'Cambios para los comercios de Mendoza',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQWAy4Tmruo_iSKJpZ2ctHgj7vLFSsx4a8w&s',
      imageAlt: 'Mendoza news',
      href: '#',
    },
    
  ]
  
  export default function NewsPage() {
    const t = useTranslations('NewsPage');
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">{t('title')} </h2>
  
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
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  