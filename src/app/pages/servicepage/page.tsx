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

          <span className="font-bold uppercase">3. CONTACTOS COMERCIALES</span><br />
          • Identificación y selección de socios/contrapartes (importadores, distribuidores, proveedores y socios estratégicos) con/sin agenda de citas.<br />
          • Organización de misiones entrantes y salientes: talleres con encuentros B2B.<br />
          • Participación en ferias.<br />
          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>
          <br /> 

          <span className="font-bold uppercase">4. SERVICIOS DE ASISTENCIA Y CONSULTORÍA ESPECIALIZADA</span><br />
          • Asistencia legal (contratos, registro de marcas y patentes, etc.).<br />
          • Asistencia administrativa, fiscal y tributaria.<br />
          • Asistencia aduanera.<br />
          • Interpretación/traducciones.<br />
          • Asistencia especializada para desarrollar estrategias de entrada (investigaciones específicas de sub-sectores, productos).<br />
          • Constitución de estructuras de establecimiento (oficinas de representación, oficinas de proyectos, sucursales y filiales de propiedad).<br />
          • Apoyo operativo en todas las fases del establecimiento (puesta en marcha, asistencia logística, selección de personal).<br />
          • Asistencia para transferencia de tecnología, joint ventures, adquisiciones y fusiones.<br />
          • Servicio de representación de empresas italianas.<br />
          • Promoción empresarial en los sistemas de comunicación de la Cámara de Comercio.<br />
          • Información comercial confidencial sobre personas físicas o jurídicas.<br />
          • Alquiler de oficina en la sede de la cámara.<br />
          • Recuperación de créditos e IVA.<br />
          • Arbitraje y conciliación.<br />
          • Otros servicios a solicitud.<br />  
          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>      
          
        </div>
      </div>
      <Image src="/hombresnegocio3.jpg" alt="salute" width={1000} height={1000} className="object-cover h-full w-1/2 mt-24 shadow-2xl" />
    </div>    
  )
}
