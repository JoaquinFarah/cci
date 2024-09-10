import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';



export default function SocialNetworkSection() {
  const t = useTranslations('SocialNetworkSection');
    return (
      <div className="bg-white py-24 sm:py-10">
        <Image
              src={"/socialnetworks1.jpg"}
              alt={"social"}
              // layout="fill"
              // objectFit="cover"
              width={1000}
              height={1000}
              className="h-52 w-full"
            />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">        
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 mt-1">          
            {t('header')}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Link href="https://www.facebook.com/ccitalrosario" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-blue-600 transition-colors lg:col-span-1">
                <FaFacebookF size={48} />
              </div>
            </Link>
            <Link href="https://x.com/mendoza_cci?lang=es" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-blue-400 transition-colors lg:col-span-1">
                <FaTwitter size={48} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/cci.mendoza/" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-pink-500 transition-colors lg:col-span-1">
                <FaInstagram size={48} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/ccimendoza/" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-blue-700 transition-colors sm:col-start-2 lg:col-span-1">
                <FaLinkedinIn size={48} />
              </div>
            </Link>
            <Link href="https://www.youtube.com/@camaraitalianaenargentina" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-red-600 transition-colors lg:col-span-1">
                <FaYoutube size={48} />
              </div>
            </Link>
            
          </div>
          <div className="flex justify-center mt-12">
            <button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">            
            Contactanos
            </button>
            Mail: info@ccimendoza.com<br/>
            Granaderos 30, Ciudad de Mendoza<br/>
            2615588923
          </div>
          
        </div>
      </div>
    );
  }
  