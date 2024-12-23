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
              Servicio Informativo
              </h3>
              <p className="text-gray-600">
              Nuestro servicio está diseñado para ayudar a las empresas a ingresar a nuevos mercados internacionales con información y análisis detallados, facilitando la toma de decisiones estratégicas.
              </p>
            </Link>   

            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eventos y Comunicación
              </h3>
              <p className="text-gray-600">
              Diseñamos experiencias únicas para conectar empresas a través de cenas de gala, eventos de networking y actividades exclusivas. Complementamos estos encuentros con estrategias de comunicación efectivas, que incluyen inserciones en medios, gestión de relaciones públicas y campañas adaptadas para impulsar el lanzamiento de empresas y productos en el mercado.
              </p>
            </Link>  

            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Contactos Comerciales
              </h3>
              <p className="text-gray-600">
              Facilitamos la conexión de empresas con socios estratégicos, importadores, distribuidores y proveedores clave, adaptándonos a sus necesidades con o sin agenda de citas. Organizamos misiones comerciales, talleres con encuentros B2B y brindamos apoyo integral en la participación en ferias internacionales para potenciar su presencia en el mercado.
              </p>
            </Link>    

            <Link href="/pages/servicepage" className="bg-white p-6 hover:scale-105 rounded-lg text-center hover:shadow-2xl transition-all border-4 border-indigo-500/100">             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Asistencia y Consultoría
              </h3>
              <p className="text-gray-600">
              Brindamos apoyo integral para el desarrollo y expansión de empresas, ofreciendo servicios que abarcan asistencia legal, fiscal y aduanera, creación de estructuras comerciales, estrategias de entrada al mercado y transferencia de tecnología. Además, facilitamos representación empresarial, promoción en nuestros canales y soporte operativo en cada etapa del proceso de establecimiento, adaptándonos a las necesidades específicas de su negocio.
              </p>
            </Link>  

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
