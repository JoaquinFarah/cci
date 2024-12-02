
import React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '../../../../utils/supabase/server';


export default async function ReportsPage() {
  
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/pages/login')
  }


  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16">Informes</h2>
        <div className="min-h-0.5 bg-gray-200 mb-4 mt-4"></div>
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-2">                    
            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Titulo TEST
              </h3>
              <h1 className="text-gray-500 text-xs">12/08/2024 | Economia</h1>
              <a href='https://drive.google.com/file/d/1mBfrtXaE_n1MwOwtCuZcvZpgDxXwG7-g/view?usp=sharing' target="_blank" className="text-gray-700 ">
                TEX_TO de testeo
              </a>
              <div className="h-1 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
            </div>   

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Titulo 2
              </h3>
              <h1 className="text-gray-500 text-xs">02/07/2024 | Marketing</h1>
              <p className="text-gray-700 mb-2">
                Reporte 2
              </p>
              <div className="h-1 bg-gradient-to-r from-green-800 via-white to-red-800"></div>
            </div>  

            <div className="bg-white p-6 rounded-lg text-start hover:shadow-2xl transition-all">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Titulo 3
              </h3>
              <h1 className="text-gray-500 text-xs">12/04/2024 | </h1>
              <p className="text-gray-700 mb-2">
                Reporte 3
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
