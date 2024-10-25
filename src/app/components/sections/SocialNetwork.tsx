"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Swal from 'sweetalert2';

const popUp = () =>{
  Swal.fire({
    title: 'Contacto',
    html: `
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrjDvbDTQTTRwkgvfMPlVsfbkHssVDmZXXGGWnHmHqzmfNvGZXQFbHFXbgdkWWcGLWKGlq" target="_blank" autofocus><u>info@ccimendoza.com</u></a><br/> Andrade 30, Ciudad de Mendoza <br/>2617659988` ,
    icon: 'info',
    confirmButtonText: 'Cerrar'
  })
};


export default function SocialNetworkSection() {
  
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
          Seguinos en nuestras redes
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

          <div className="flex justify-center mt-8">
            <button type="button" onClick={popUp} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Contactanos</button>
          </div>

        </div>
      </div>
    );
  }
  