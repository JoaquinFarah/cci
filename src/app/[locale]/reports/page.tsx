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
              {/* <div className="flex justify-center mb-4">
                <Image
                  src={"/"}
                  alt={"img1"}
                  width={60}
                  height={60}
                />
              </div> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title1')}
              </h3>
              <p className="text-gray-600">
                {t('report1')}
              </p>
            </div>   

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">
              {/* <div className="flex justify-center mb-4">
                <Image
                  src={"/"}
                  alt={"img2"}
                  width={60}
                  height={60}
                />
              </div> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title2')}
              </h3>
              <p className="text-gray-600">
                {t('report2')}
              </p>
            </div>  

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">
              {/* <div className="flex justify-center mb-4">
                <Image
                  src={"/"}
                  alt={"img3"}
                  width={60}
                  height={60}
                />
              </div> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title3')}
              </h3>
              <p className="text-gray-600">
                {t('report3')}
              </p>
            </div>    

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">
              {/* <div className="flex justify-center mb-4">
                <Image
                  src={"/"}
                  alt={"img4"}
                  width={60}
                  height={60}
                />
              </div> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('title4')}
              </h3>
              <p className="text-gray-600">
                {t('text4')}
              </p>
            </div>  

            {/* More services */}


        </div>
      </div>
    </section>
  );
};

export default ReportsPage;
