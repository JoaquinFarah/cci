// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import LocalSwitcher from './local-switcher';
// import { useTranslations } from 'next-intl';

// const Navbar: React.FC = () => {
//   // Estado para controlar la visibilidad del dropdown
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Función para alternar el dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const t = useTranslations('Navbar');

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo a la izquierda */}
//           <div className="flex items-center">
//             <Link href="/">
//               <Image                    
//                 src="/LogoCCI.jpg"
//                 alt="CCI"
//                 width={100}
//                 height={100}
//                 className="object-contain max-h-16"
//                 priority
//               />
//             </Link>
//           </div>
          
//           {/* Enlaces de navegación a la derecha */}
//           <div className="flex items-center space-x-4">
//             <Link href="/about" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
//             {t('About')}
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
//             {t('Partners')}
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
//             {t('News')}
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
//             {t('Calendar')}
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
//             {t('Services')}
//             </Link>

//             <Link href="/login" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
//               LogIn/LogOut
//             </Link>

            
//             {/* Dropdown de idioma */}
//             <div className="relative">
//               <div  className="flex items-center space-x-2 focus:outline-none">
//                 <Image
//                   src="/language-icon.png" // Aquí deberías poner la ruta de la imagen que representa el cambio de idioma
//                   alt="Change Language"
//                   width={24}
//                   height={24}
//                 />
//                 <LocalSwitcher/>
                
//               </div>
              
//               {/* Opciones del Dropdown */}
//               {/* {dropdownOpen && (
//                 <div className="absolute right-0 mt-0 w-40 bg-white shadow-xl rounded-md overflow-hidden">
//                   <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     Español
//                   </Link>
//                   <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     Italiano
//                   </Link>
//                 </div>
//               )} */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Línea roja debajo del navbar */}
//       <div className="h-2 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LocalSwitcher from './local-switcher';
import { useTranslations } from 'next-intl';

const Navbar: React.FC = () => {
  // Estado para controlar la visibilidad del dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Función para alternar el dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const t = useTranslations('Navbar');

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo a la izquierda */}
          <div className="flex items-center">
            <Link href="/">
              <Image                    
                src="/LogoCCI.jpg"
                alt="CCI"
                width={100}
                height={100}
                className="object-contain max-h-16"
                priority
              />
            </Link>
          </div>
          
          {/* Enlaces de navegación a la derecha */}
          <div className="flex items-center space-x-4">
            <Link href="/about" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              {t('About')}
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              {t('Partners')}
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              {t('News')}
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              {t('Calendar')}
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              {t('Services')}
            </Link>

            <Link href="/login" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              LogIn/LogOut
            </Link>

            {/* Dropdown de idioma */}
            <div className="relative">
              <div onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none cursor-pointer">
                <Image
                  src="/language-icon.png" // Aquí deberías poner la ruta de la imagen que representa el cambio de idioma
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
