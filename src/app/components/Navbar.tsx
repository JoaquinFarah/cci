"use client"


// import React from 'react';
// import Link from 'next/link'; 
// import Image from 'next/image'; 

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">          
          
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
//           <div className="flex space-x-4">
//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400">
//               Calendario
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400">
//               Noticias
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400">
//               Quienes somos
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400">
//               Socios
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400">
//               LogIn
//             </Link>

//             <Link href="/" className="no-underline underline decoration-4 transition-all duration-500 hover:underline hover:decoration-blue-400">
//               LogOut
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       <div className="h-1 bg-red-500"></div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  // Estado para controlar la visibilidad del dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Función para alternar el dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
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
            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              Quienes Somos
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              Calendario
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              Noticias
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              Socios
            </Link>

            <Link href="/" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              Servicios
            </Link>

            <Link href="/login" className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
              LogIn/LogOut
            </Link>

            
            {/* Dropdown de idioma */}
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
                <Image
                  src="/language-icon.png" // Aquí deberías poner la ruta de la imagen que representa el cambio de idioma
                  alt="Change Language"
                  width={24}
                  height={24}
                />
                <span className="no-underline underline decoration-4 transition-all duration-300 hover:underline hover:decoration-blue-400">
                  
                </span>
              </button>
              
              {/* Opciones del Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
                  <Link href="/" locale="es" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Español
                  </Link>
                  <Link href="/" locale="en" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Italiano
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Línea roja debajo del navbar */}
      <div className="h-1 bg-red-500"></div>
    </nav>
  );
};

export default Navbar;
