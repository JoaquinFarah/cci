import React from 'react'
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function ServicePage({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('ServicePage');
  return (
    <div className="flex h-full bg-white">
      <div className="flex flex-col items-center justify-start w-1/2 p-10 mt-20">
        <h1 className="text-4xl font-bold mb-4">{t('header')} </h1>
        <p className="text-lg text-gray-700">
          {t('description')}
          <br />
          <br />
          {t('title1')}
          <br />
          <br />
          {t('title2')}
          <br />
          <br />
          {t('title3')}
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatibus numquam iure ea delectus, impedit, blanditiis fugit quidem corporis vel beatae nam voluptatem illo cumque. Recusandae nulla enim animi architecto!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae enim inventore, iure earum accusantium ut magni consequatur, explicabo aliquid incidunt accusamus doloremque facilis laudantium consequuntur exercitationem modi dolorem? Assumenda!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, pariatur delectus quasi voluptatum molestias et consequatur dicta aliquid totam nostrum, ipsa, repellat dolores modi consequuntur facere dolore eaque error?
          
        </p>
      </div>
      <img src="/hombresnegocio3.jpg" alt="salute" className="object-cover h-full w-1/2 mt-24 shadow-2xl" />
    </div>
    
  )
}
