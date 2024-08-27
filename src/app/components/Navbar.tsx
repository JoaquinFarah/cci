"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LocalSwitcher from './local-switcher';
import { useTranslations } from 'next-intl';

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
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-0">
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
          <div className="flex items-center justify-end space-x-4">
            <Link href="/es/about" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('about')}
            </Link>

            <Link href="/es/servicepage" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('services')}
            </Link>

            <Link href="/es/news" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('news')}
            </Link>

            <Link href="/" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('reports')}
            </Link>

            <Link href="/" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('calendar')}
            </Link>

            <Link href="/" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              {t('partners')}
            </Link>

            <Link href="/login" className="no-underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400 uppercase">
              LogIn/LogOut
            </Link>

            {/* Dropdown language */}
            <div className="relative">
              <div onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none cursor-pointer">
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
