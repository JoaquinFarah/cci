import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const ServiceSection: React.FC = () => {
  const t = useTranslations('ServiceSection');
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{t('header')}</h2>
        <div className="min-h-0.5 bg-gray-200 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">                    
            
            <div className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title1')}
              </h3>
              <p className="text-gray-600">
                {t('text1')}
              </p>
            </div>   

            <div className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title2')}
              </h3>
              <p className="text-gray-600">
                {t('text2')}
              </p>
            </div>  

            <div className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title3')}
              </h3>
              <p className="text-gray-600">
                {t('text3')}
              </p>
            </div>    

            <div className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title4')}
              </h3>
              <p className="text-gray-600">
                {t('text4')}
              </p>
            </div>  

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
