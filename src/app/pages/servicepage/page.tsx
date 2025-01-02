"use client"
import React from 'react'
import { ServicePopUp } from '@/app/components/sections/ServiceRequesPopUp';
import Image from 'next/image';


export default function ServicePage() {
  
  return (
    <div className="flex h-full bg-white">
      <div className="flex flex-col items-start justify-start w-1/2 p-10 mt-20">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Servicios</h1> 
        <div className="min-h-0.5 flex bg-gray-200 mb-4 mt-4"></div>                            
        <div className="text-lg text-gray-700"> 

          <span className="font-bold uppercase text-xl">1. Las Rutas de San Martín y Garibaldi: Explorando Nuevos Horizontes</span>
          <br /> 
          <span className="font-semibold text-xl">Puntos Clave:</span> 
          <br />          
          • Identificación de socios estratégicos para una presencia sólida en el mercado.
          <br />
          • Creación de conexiones confiables para garantizar éxitos a largo plazo.
          <br />
          <br />
          <p>
          <span className="font-style: italic">{`"Siguiendo las rutas de grandes líderes, abrimos el camino para las pymes hacia nuevos mercados con seguridad y visión estratégica"`}</span>
          <br />
          <br />         
          Un paquete esencial para empresas que deseen establecer bases sólidas para su entrada en el mercado argentino.   
          </p>
          <div className="font-semibold mt-5 text-xl">Servicios incluidos:</div>
          <p>
          - Identificación y selección de distribuidores en Italia relevantes para el sector correspondiente.  
          <br />
          - Organización de reuniones estratégicas con los distribuidores preseleccionados.
          <br/>
          - Análisis exhaustivo de la confiabilidad y solidez de dos distribuidores elegidos por el cliente.
          </p>
          <div className="font-semibold mt-5 text-xl">Target:</div>
          <p>
          Pymes interesadas en desarrollar relaciones comerciales con distribuidores confiables y consolidados. 
          </p>
          
          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>
          <br />

          <span className="font-bold uppercase text-xl">2. Alianzas de los Médici: Construyendo Relaciones Estratégicas </span><br />        
          <span className="font-semibold text-xl">Puntos Clave:</span><br />          
          • Creación de alianzas de valor para proyectos y oportunidades.
          <br />
          • Desarrollo de sinergias con actores clave para posicionarse en mercados prestigiosos.
          <br/>
          <br/>
          <span className="font-style: italic">{`"Así como los Médici moldearon el arte y la cultura, hoy construimos alianzas estratégicas para el éxito de las empresas."`}</span>
          <br/>
          <br/>
          Un paquete orientado a la construcción de alianzas estratégicas con actores clave en los sectores objetivo.  
          <br/>
          <br/>
          <span className="font-semibold text-xl">Servicios incluidos:</span><br />
          - Identificación y contacto con socios estratégicos (p. ej., restaurantes, hoteles boutique, minoristas especializados).
          <br />
          - Creación de propuestas de colaboración personalizadas.
          <br />
          - Apoyo en la gestión de relaciones para fomentar colaboraciones a largo plazo.
          <br />
          <br />
          <span className="font-semibold text-xl">Target:</span>
          <br />
          Pymes interesadas en posicionar sus productos en puntos de venta exclusivos o desarrollar colaboraciones estratégicas.  

          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>
          <br />          

          <span className="font-bold uppercase text-xl">3. El Ingenio de Leonardo: Soluciones Creativas para las Pymes </span><br />
          <span className="font-semibold text-xl">Puntos Clave:</span><br />
          • Innovación estratégica para enfrentar los desafíos del mercado.
          <br />
          • Soluciones personalizadas para posicionar a las pymes con excelencia y creatividad.
          <br />
          <br />
          <span className="font-style: italic">{`"Con la visión y el ingenio de Leonardo, transformamos ideas en oportunidades de crecimiento para cada empresa."`}</span>
          <br/>
          <br/>
          Un paquete premium para empresas que buscan un enfoque integrado al mercado, combinando estrategias de marketing, relaciones estratégicas y networking. 
          <br/>
          <br/>
          <span className="font-semibold text-xl">Servicios incluidos:</span><br />
          - Desarrollo de una estrategia de marketing local, incluidas análisis de mercado, focus groups y campañas digitales.
          <br />
          - Identificación de distribuidores y socios estratégicos relevantes.
          <br />
          - Organización de reuniones estratégicas con los principales actores del mercado.
          <br />
          - Creación y gestión de eventos experienciales para promover la marca y reforzar su posicionamiento.
          <br />
          - Apoyo en la gestión de relaciones para fomentar colaboraciones a largo plazo.
          <br />
          <br />
          <span className="font-semibold text-xl">Target:</span>
          <br />
          Pymes que desean un enfoque completo y a medida para conquistar el mercado italiano y europeo.  

          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>
          <br /> 

          <span className="font-bold uppercase text-xl">4. La Estrategia de Cavour: Planificar el Éxito </span><br />
          <span className="font-semibold text-xl">Puntos Clave:</span><br />
          • Herramientas avanzadas para expandir el acceso a mercados internacionales.
          <br />
          • Apoyo estratégico para construir un crecimiento sólido y sostenible.
          <br />
          <br />
          <span className="font-style: italic">{`"Con la visión de Cavour, guiamos a las pymes hacia decisiones estratégicas y victorias empresariales."`}</span>
          <br/>
          <br/>
          Un paquete diseñado para acompañar a las pymes en todas las etapas de su proceso de internacionalización.   
          <br/>
          <br/>
          <span className="font-semibold text-xl">Servicios incluidos:</span><br />
          - Apoyo administrativo, legal y fiscal.
          <br />
          - Acceso a espacios equipados para reuniones y videoconferencias.
          <br />
          - Promoción de oportunidades empresariales a través de los canales de la Cámara.
          <br />
          - Seguimiento continuo para monitorear el progreso y optimizar los resultados.
          <br />
          <br />
          <span className="font-semibold text-xl">Target:</span>
          <br />
          PPymes que necesiten un apoyo integral para consolidar su presencia en Italia y Europa.  

          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>      
          
        </div>
      </div>
      <Image src="/hombresnegocio3.jpg" alt="salute" width={1000} height={1000} className="object-cover h-full w-1/2 mt-24 shadow-2xl" />
    </div>    
  )
}
