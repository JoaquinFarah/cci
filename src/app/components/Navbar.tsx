"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="w-full mx-0 px-1 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo leftside */}
          <div className="flex items-center flex-grow">
            <Link href="/pages">
              <Image                    
                src="/Logo_CCI.jpeg"
                alt="CCI"
                width={350}
                height={350}
                className="object-contain max-h-16"
                priority
              />
            </Link>
          </div>
          
          {/* Links rightside */}
          <div className="flex items-center justify-end space-x-3">
            <Link href="/pages/about" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
            Quiénes somos
            </Link>

            <Link href="/pages/servicepage" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
            Servicios
            </Link>

            <Link href="/pages/news" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
            Noticias
            </Link>

            <Link href="/pages/calendar" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
            Calendario
            </Link>

            <Link href="/pages/reports" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
            Informes
            </Link>            

            <Link href="/pages/partners" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
            Socios
            </Link>

            <Link href="/pages/login" className="no-underline decoration-2 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              login
            </Link>

          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
    </nav>
  );
};

export default Navbar;
