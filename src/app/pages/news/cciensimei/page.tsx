import React from 'react'
import Image from 'next/image'

export default function cciensimei() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h3 className="text-gray-400 mb-1">Mendoza, lunes 18 de Noviembre. </h3>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La CCI presente en la feria SIMEI, con excelentes resultados</h2>
        <div className="min-h-0.5 bg-gray-200 mb-4"></div>
        <div className="space-y-6">
          <p>
          Del 12 al 15 de noviembre, Milán se convirtió en el epicentro de la innovación vitivinícola con la realización de la feria SIMEI 2024, uno de los eventos más importante a nivel mundial en tecnologías para la enología y la viticultura. Este año, la Cámara de Comercio Italiana de Mendoza tuvo una destacada participación, encabezada por Oliverio Gabrielli, quien lideró una comitiva de empresas mendocinas con el objetivo de fortalecer los lazos comerciales entre Argentina e Italia y explorar las últimas innovaciones del sector.
          </p>

          <p>
          La misión, organizada cuidadosamente por la Cámara, incluyó bodegas y empresas locales como Cantina La Riojana, Bodega Luigi Bosca, Bodega Altavista, Domaine Bousquet, Bodega Malma, Altieri SA, Sucopack, SISA Argentina y Natural Resources S.A., además de la participación académica de la Universidad Nacional de Cuyo y los organizadores de la prestigiosa feria Sitevinitech. Estos representantes tuvieron la oportunidad de interactuar directamente con fabricantes italianos de maquinaria vitivinícola, estableciendo contactos clave para la selección y adquisición de tecnologías de vanguardia.  
          </p>
          
          

          <p>
          La feria sirvió como una plataforma única para consolidar relaciones comerciales y explorar innovaciones tecnológicas. Durante los cuatro días del evento, se llevaron a cabo numerosas reuniones y negociaciones, en las cuales la comitiva mendocina logró destacar no solo por su profesionalismo, sino también por el interés genuino en impulsar el crecimiento de la industria vitivinícola argentina.
          </p>

          <p>
          El impacto de la participación en SIMEI 2024 se reflejó en los testimonios de las empresas italianas y argentinas, así como de los organizadores del evento, quienes agradecieron y reconocieron el trabajo de la Cámara de Comercio Italiana de Mendoza. Desde la gestión de contactos hasta la generación de oportunidades comerciales concretas, la Cámara se consolidó como un actor clave en el desarrollo de nuevas alianzas estratégicas para el sector.
          </p>

          <p>
          En palabras del Director de la Cámara, Dr. Ing. Pedro Baziuk: “Este evento no solo permitió descubrir las últimas innovaciones en tecnología vitivinícola, sino que también reforzó la presencia de Mendoza en el mercado europeo, sentando bases sólidas para futuros acuerdos y colaboraciones. La participación de nuestra comitiva fue crucial para generar confianza, visibilidad y oportunidades comerciales que beneficiarán a nuestra región”.
          </p>

          <p>
          El éxito de SIMEI 2024 no solo resalta la importancia de la tecnología y la innovación en la industria vitivinícola, sino también la relevancia de establecer puentes entre mercados internacionales. Gracias a la participación activa de la Cámara de Comercio Italiana de Mendoza, el sector vitivinícola mendocino sigue posicionándose como un referente de calidad y proyección en el mercado global.
          </p>

        </div>
      </div>   
      <div className="">
        <div className="relative w-full" style={{ paddingBottom: '70%' }}>
          <Image
            src="/silvestreyoliverio.jpg"
            alt="silvestre y oliverio"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>  
        <p className="text-xs text-center text-gray-500 mt-2 mb-2">Silvestre Airoldi (izquierda) y Oliverio Gabrielli (derecha), en SIMEI</p>
      </div>               
    </div>
  )
}