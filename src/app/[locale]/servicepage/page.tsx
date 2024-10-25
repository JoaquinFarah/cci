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

          <span className="font-bold uppercase">1. Servicio Informatico</span><br />          
          <span className="font-semibold">1.a. Primera orientación al mercado</span><br />          
          • Análisis de mercado por país/sector.<br />
          • Dossiers informativos sobre normativas (aduaneras, fiscales, incentivos).<br />
          • Información sobre ferias y eventos.<br />
          <span className="font-semibold">1.b. Seminario informativo/presentación de país</span>
          <span className="flex justify-center mt-7">
          <ServicePopUp/>
          </span>
          <br />
                    
          <span className="font-bold uppercase">2. EVENTOS Y COMUNICACIÓN</span><br />        
          <span className="font-semibold">2.a. Eventos</span><br />          
          • Cenas de gala / eventos de networking.<br />
          • Eventos autónomos.<br />
          <span className="font-semibold">2.b. Comunicación</span><br />
          • Inserciones publicitarias en revistas y medios electrónicos.<br />
          • Conferencias de prensa, relaciones con los medios.<br />
          • Campañas en medios (lanzamiento de empresas, productos).<br />
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
