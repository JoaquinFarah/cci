import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const ReportsPage: React.FC = () => {
  const t = useTranslations('ReportsPage');
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-start text-gray-800 mb-8 mt-16">
          {t('header')}
        </h2>
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-2">
                    
            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title1')}
              </h3>
              <h1 className="text-gray-500 text-xs">12/08/2024 | Economia</h1>
              <p className="text-gray-700 ">
                {t('report1')}
              </p>
              <div className="h-1 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
            </div>   

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title2')}
              </h3>
              <h1 className="text-gray-500 text-xs">02/07/2024 | Marketing</h1>
              <p className="text-gray-700 mb-2">
                {t('report2')}
              </p>
              <div className="h-1 bg-black"></div>
            </div>  

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title3')}
              </h3>
              <h1 className="text-gray-500 text-xs">12/04/2024 | </h1>
              <p className="text-gray-700 mb-2">
                {t('report3')}
              </p>
              <div className="h-1 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
            </div>    

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                TITULO DEL PROXIMO REPORTE
              </h3>
              <h1 className="text-gray-500 text-xs">Fecha | Marketing</h1>
              <p className="text-gray-700 mb-2">
                TEXTO DEL PROXIMO REPORTE
              </p>
              <div className="h-1 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
            </div>  

            {/* More services */}


        </div>
      </div>
    </section>
  );
};

export default ReportsPage;
