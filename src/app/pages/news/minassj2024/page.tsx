import React from 'react'
import Image from 'next/image'

export default function minas() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h3 className="text-gray-400 mb-1">Mendoza, viernes 14 de junio. </h3>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La Cámara de Comercio Italiana en la Expo San Juan Minera 2024: Promoviendo el Made in Italy en el Sector Minero Argentino</h2>
        <div className="min-h-0.5 bg-gray-200 mb-4"></div>
        <div className="space-y-6">
          <p>
          Del 21 al 23 de mayo de 2024, la Cámara de Comercio Italiana de Mendoza (CCI) tuvo el honor de participar en la Expo San Juan Minera, uno de los eventos más importantes del sector minero en Argentina y América Latina. Esta feria, que se llevó a cabo en el Predio Cepas Sanjuaninas, ofreció una plataforma excepcional para fortalecer los lazos comerciales entre Italia y el sector minero argentino, y promover productos de alta calidad bajo el sello &quot Made in Italy &quot.
          </p>

          <p>
          Durante la feria, la CCI contó con un stand exclusivo que recibió más de un centenar de visitas, generando un gran interés en los productos y soluciones presentadas. La ubicación estratégica del stand permitió maximizar la visibilidad de las empresas representadas, lo que resultó en múltiples oportunidades de negocio. Actualmente, la CCI está trabajando en el seguimiento con todos los contactos establecidos para concretar posibles acuerdos comerciales.  
          </p>
          
          <p className="font-bold text-xl">
            Empresas Representadas
          </p>

          <p>
            En esta ocasión, la CCI tuvo el placer de representar tanto a empresas locales como internacionales. Entre las empresas socias de la Cámara que participaron presencialmente en el stand se encuentran:
          </p>
            <p>
                - <span className="font-bold">GT Ingeniería</span>: Una empresa argentina que ofrece soluciones innovadoras en ingeniería para el sector minero.
            </p>        
            <p>
                - <span className="font-bold">Anddes</span>: Compañía dedicada a brindar consultoría especializada en proyectos mineros, con un fuerte enfoque en la sostenibilidad y el medio ambiente.
            </p>
            <p>
            Además, la Cámara representó de manera remota a tres destacadas empresas italianas:    
            </p>
            <p>
                <span className="font-bold">1. NERON</span>: Especializada en la producción de bombas de limpieza de alta presión y amplificadores de presión para el ámbito industrial. Sus productos, de alta versatilidad y potencia, han captado la atención de diversas empresas mineras en Argentina.
            </p>
            <p>
                <span className="font-bold">2. Spirale-Nora</span>: Con más de 40 años de experiencia en la fabricación de calzado de seguridad, Spirale presentó sus botas NORA, reconocidas por cumplir con los estándares europeos más estrictos y diseñadas específicamente para la industria minera.
            </p>
            <p>
                <span className="font-bold">3. Cucuzza Inox</span>: Empresa con sede en Sicilia, Italia, que desde 1974 produce soluciones personalizadas en acero inoxidable para diferentes sectores. Durante la expo, sus productos fueron especialmente bien recibidos por su aplicación en la industria alimentaria y científica, así como en el ámbito minero.
            </p> 
             

          <p className="font-bold text-xl">
          Oportunidades Comerciales y Agradecimientos
          </p>

          <p>
            La participación en la Expo San Juan Minera 2024 permitió a la CCI promover no solo productos de alta tecnología italiana, sino también destacar la apertura comercial de Argentina en el sector minero. La reciente flexibilización en la importación de maquinaria y suministros para proyectos mineros, promovida por el nuevo Secretario de Minería, Luis Lucero, ha generado un entorno favorable para las empresas italianas interesadas en ingresar al mercado argentino.
          </p>

          <p>
          Queremos extender nuestro más sincero agradecimiento a PANORAMA MINERO, organizador del evento, por brindarnos esta plataforma para exhibir el potencial del ´Made in Italy´ en el sector minero. También agradecemos a todos los visitantes y colaboradores que nos acompañaron en este importante evento.
          </p>

          <p>
          La CCI seguirá trabajando para fortalecer las relaciones comerciales entre Italia y Argentina, generando nuevas oportunidades para las empresas en futuros eventos y exposiciones.
          </p>
        </div>
      </div>   
      <div className="">
        <div className="relative w-full" style={{ paddingBottom: '90%' }}>
          <Image
            src="/exposj.jpeg"
            alt="Pedro Baziuk y Oliverio Gabrielli, junto con los representantes de Green Mining"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>  
        <p className="text-xs text-center text-gray-500 mt-2 mb-2">Pedro Baziuk y Oliverio Gabrielli, junto con los representantes de Green Mining.</p>
      </div>               
    </div>
  )
}