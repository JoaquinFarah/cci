import React from 'react'
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function About({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('AboutPage');
  return (
    <div className="flex h-full bg-gray-100">
      <div className="flex flex-col items-center justify-center w-1/2 p-10 mt-20">
        <h1 className="text-4xl font-bold mb-4">{t('title')} </h1>
        <p className="text-lg text-gray-700">
          {t('description')}
          <br />
          <br />
          {t('description1')}
          <br />
          <br />
          {t('description2')}
          <br />
          <br />
          {t('description3')}
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
