import React from 'react';
import { useTranslations } from 'next-intl';



const posts = [
    {
      id: 1,      
      href: '#',
      imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdQr1lkzMWyBSS3BW8e44omV7OtyhbPDa_A&s',
    },
    {
        id: 2,      
        href: '#',
        imageUrl:
            'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/818/2016031505482167d16d00201083a2b118dd5128dd6f59.jpg',
    },
    {
        id: 3,      
        href: '#',
        imageUrl:
            'https://otslist.boletinoficial.gob.ar/static/app/css/logo-bora.png',
    },
  
    // More posts...
  ]
  
  export default function NewsSection() {
    const t = useTranslations('NewsSection');
    return (
      <div className="bg-white py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('header')} </h2>
            <p className="mt-1 text-lg leading-8 text-gray-600">
              {t('header1')}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-2 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <p className="text-gray-500">
                    {t('date1')}
                  </p>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {t('category1')}
                  </p>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {t('title1')}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{t('description1')}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">                      
                        <span className="absolute inset-0" />
                        {t('author1')}                      
                    </p>
                    <p className="text-gray-600">{t('media1')}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  