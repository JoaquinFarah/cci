import React from 'react'
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function ServicePage({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('ServicePage');
  return (
    <div className="flex h-full bg-white">
      <div className="flex flex-col items-start justify-start w-1/2 p-10 mt-20">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{t('header')}</h1>                
        <p className="text-lg text-gray-700">
        <div className="min-h-0.5 bg-gray-200 mb-4"></div>

          <span className="font-bold uppercase">{t('title1')}</span><br />          
          <span className="font-semibold">{t('subtitle1a')}</span><br />          
          {t('description1a1')}<br />
          {t('description1a2')}<br />
          {t('description1a3')}<br />
          <span className="font-semibold">{t('subtitle1b')}</span><br />
          <br />
          
          <span className="font-bold uppercase">{t('title2')}</span><br />        
          <span className="font-semibold">{t('subtitle2a')}</span><br />          
          {t('description2a1')}<br />
          {t('description2a2')}<br />
          <span className="font-semibold">{t('subtitle2b')}</span><br />
          {t('description2b1')}<br />
          {t('description2b2')}<br />
          {t('description2b3')}<br />
          <br />          

          <span className="font-bold uppercase">{t('title3')}</span><br />
          {t('description31')}<br />
          {t('description32')}<br />
          {t('description33')}<br />
          <br /> 

          <span className="font-bold uppercase">{t('title4')}</span><br />
          {t('description41')}<br />
          {t('description42')}<br />
          {t('description43')}<br />
          {t('description44')}<br />
          {t('description45')}<br />
          {t('description46')}<br />
          {t('description47')}<br />
          {t('description48')}<br />
          {t('description49')}<br />
          {t('description410')}<br />
          {t('description411')}<br />
          {t('description412')}<br />
          {t('description413')}<br />
          {t('description414')}<br />
          {t('description415')}<br />          
          
        </p>
      </div>
      <img src="/hombresnegocio3.jpg" alt="salute" className="object-cover h-full w-1/2 mt-24 shadow-2xl" />
    </div>
    
  )
}
