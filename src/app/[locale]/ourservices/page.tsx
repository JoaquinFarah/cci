import React from 'react'
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function OurServices({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('ServicePage');
  return (
    <div className="flex h-full bg-gray-100">
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
          {t('description4')}
          <br />
          <br />
          {t('description5')}
          <br />
          <br />
          {t('description6')}
          
        </p>
      </div>
      <img src="/hombresnegocio3.jpg" alt="salute" className="object-cover h-full w-1/2 mt-24 shadow-2xl" />
    </div>
    
  )
}
