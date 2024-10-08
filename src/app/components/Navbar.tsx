"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LocalSwitcher from './local-switcher';
import { useTranslations } from 'next-intl';
import { logout } from '../[locale]/logout/actions';



const Navbar: React.FC = () => {
  // State for dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function for dropdown switch
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const t = useTranslations('Navbar');

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="w-full mx-0 px-1 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo leftside */}
          <div className="flex items-center flex-grow">
            <Link href="/">
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
            <Link href="/es/about" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('about')}
            </Link>

            <Link href="/es/servicepage" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('services')}
            </Link>

            <Link href="/es/news" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('news')}
            </Link>

            <Link href="/es/calendar" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('calendar')}
            </Link>

            <Link href="/es/reports" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('reports')}
            </Link>            

            <Link href="/es/partners" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('partners')}
            </Link>

            <Link href="/es/login" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              login
            </Link>

            
            {/* <Link href="/es/login" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
              LogIn
            </Link> */}

            {/* <form action={logout}>
                    <button type="submit" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">LogOut</button>
            </form>  */}

            {/* Dropdown language */}
            <div className="relative">
              <div className="flex items-center space-x-0 focus:outline-none ">
                <Image
                  src="/language-icon.png"
                  alt="Change Language"
                  width={24}
                  height={24}
                />
                <LocalSwitcher />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
    </nav>
  );
};

export default Navbar;
