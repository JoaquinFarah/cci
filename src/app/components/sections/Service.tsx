import React from 'react';
import Link from 'next/link';


const ServiceSection: React.FC = () => {
  
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Nuestros Servicios</h2>
        <div className="min-h-0.5 bg-gray-200 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">                    
          
            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Servicio Informático
              </h3>
              <p className="text-gray-600">
              Nuestro servicio está diseñado para ayudar a las empresas a ingresar a nuevos mercados internacionales con información y análisis detallados, facilitando la toma de decisiones estratégicas.
              </p>
            </Link>   

            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Análisis de Mercado Personalizado
              </h3>
              <p className="text-gray-600">
              Ofrecemos un análisis detallado de mercados por país y sector, brindando a tu empresa una visión clara y precisa de las oportunidades y desafíos que se presentan en cada región.
              </p>
            </Link>  

            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Informes Normativos Específicos
              </h3>
              <p className="text-gray-600">
              Proporcionamos dossiers informativos sobre regulaciones aduaneras, fiscales y beneficios disponibles, adaptados a las necesidades de tu negocio, para que puedas operar en nuevos mercados con seguridad y confianza.
              </p>
            </Link>    

            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Información sobre Ferias y Eventos
              </h3>
              <p className="text-gray-600">
              Te mantenemos informado sobre las principales ferias y eventos de tu sector, permitiéndote conectar con las oportunidades más relevantes para el crecimiento de tu empresa.
              </p>
            </Link>  

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
