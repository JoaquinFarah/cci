import React from 'react';
import Link from 'next/link';


const ServiceSection: React.FC = () => {
  
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Nuestros Servicios</h2>
        <div className="min-h-0.5 bg-gray-200 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">                    
          
            <Link href="https://ccimendoza.vercel.app/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Le Rotte di San Martíne Garibaldi: Esplorare Nuovi Orizzonti
              </h3>
              <p className="text-gray-600">
              Seguendo le rotte dei grandi leader, apriamo la strada per le PMI verso nuovi mercati con sicurezza e visione strategica.
              </p>
              
              <p className="text-gray-600 mt-3">
              Un pacchetto essenziale per aziende che desiderano stabilire solide basi per il loro ingresso nel mercato argentino. 
              </p>
            </Link>   

            <Link href="https://ccimendoza.vercel.app/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Alianze dei Medici: Costruire Relazioni Strategiche
              </h3>
              <p className="text-gray-600">
              Come i Medici hanno plasmato l’arte e la cultura, costruiamo oggi alleanze strategiche per il successo delle imprese.
              </p>
              <p className="text-gray-600 mt-3">
              Un pacchetto orientato alla costruzione di alleanze strategiche con attori chiave nei settori target.
              </p>
            </Link>  

            <Link href="https://ccimendoza.vercel.app/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              L´Ingegno di Leonardo: Soluzioni Creative per le PMI
              </h3>
              <p className="text-gray-600">
              Con la visione e l’ingegno di Leonardo, trasformiamo idee in opportunità di crescita per ogni impresa.
              </p>
              
              <p className="text-gray-600 mt-3">
              Un pacchetto premium per aziende che cercano un approccio integrato al mercato, combinando strategie di marketing, relazioni strategiche e networking.
              </p>
            </Link>    

            <Link href="https://ccimendoza.vercel.app/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              La Strategia di Cavour: Pianificare il Successo
              </h3>
              <p className="text-gray-600">
              Con la lungimiranza di Cavour, guidiamo le PMI verso scelte strategiche e vittorie imprenditoriali.
              </p>
              <p className="text-gray-600 mt-3">
              Un pacchetto progettato per accompagnare le PMI in tutte le fasi del loro percorso di internazionalizzazione.
              </p>
            </Link>  

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
