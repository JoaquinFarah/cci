import React from 'react'
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function About({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('AboutPage');
  return (
    <h1>{t('title')}</h1>
  )
}
