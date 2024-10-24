import React from 'react'
import Image from 'next/image'

export default function sitevinitech() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h3 className="text-gray-400 mb-1">Mendoza, viernes 24 de mayo. </h3>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Exitosa participación de la CCI en SITEVINITECH 2024</h2>
        <div className="min-h-0.5 bg-gray-200 mb-4"></div>
        <div className="space-y-6">
          <p>
            La Cámara de Comercio Italiana de Mendoza tuvo el honor de participar en SITEVINITECH 2024, la feria más importante de tecnología vitivinícola en la región. Este evento, que se celebró en mayo, reunió a destacados actores del sector, brindando una plataforma ideal para que las empresas innovadoras mostraran sus soluciones tecnológicas y establecieran importantes vínculos comerciales.
          </p>

          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/sitevinitech.jpeg"
              alt="grupal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div> 
          <p className="text-xs text-gray-500">De izquierda a derecha: Silvia Cordioli, Luciano Cicchitti, Oliverio Gabrielli, Guadalupe de Rosas y Leandro Castrillo. </p>         

          <p>
            Durante la feria, la Cámara representó varias empresas italianas, entre las cuales destacaron LASI, Cucuzza Inox, y CET Electronics. Además, compartimos nuestro espacio con otras compañías internacionales de renombre, como SucoPack, Maselli Latam, EyesTrading, y CIC. Esta colaboración resultó ser una experiencia enriquecedora, donde cada una de las empresas demostró su capacidad de innovación y excelencia en sus productos y servicios.
          </p>
          
          <p className="font-bold text-xl">
            El éxito del stand Italia
          </p>

          <p>
            La participación en SITEVINITECH fue un éxito rotundo, gracias al apoyo y la visita de numerosos profesionales del sector que se acercaron a nuestro stand de Italia. Las siete empresas que formaron parte del pabellón mostraron su liderazgo en la industria, atrayendo la atención de diversos visitantes interesados en las soluciones tecnológicas para la vitivinicultura.
          </p>

          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/sitevinitechbanner.jpg"
              alt="sitevinitech"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <p>
            Entre las innovaciones presentadas, Sincera Sistemi se destacó por su tecnología de mecanización del lacrado de botellas. Silvia Cordioli, gerente de ventas para el comercio exterior de la empresa, ofreció una entrevista detallada explicando el proceso de automatización del lacrado, el cual permite operar a un ritmo de hasta 400 botellas por hora. Sincera Sistemi presentó su lacre artificial, ideal para vinos y licores, que se distingue por su simplicidad de uso y por ofrecerse en una amplia gama de colores.
          </p>

          <p className="font-bold text-xl">
            Italia y el futuro de la vitivinicultura argentina
          </p>

          <p>
            El éxito de la participación de las empresas italianas en SITEVINITECH reafirma el compromiso de Italia con la industria vitivinícola argentina. Silvia Cordioli destacó la importancia de este mercado: `Creemos en Argentina y en su industria vitivinícola. Trabajamos a nivel global y reconocemos el valor de empresas de gran calibre y productos de excelencia como el Malbec`.
          </p>

          <p>
            Agradecemos a todos los que visitaron nuestro stand y contribuyeron al éxito de esta edición de SITEVINITECH. Invitamos a quienes deseen saber más sobre las empresas expositoras a visitar el Catálogo Virtual de la feria, donde encontrarán información detallada sobre las innovaciones presentadas. Pueden acceder al catálogo a través del siguiente enlace:<a className="underline text-blue-700" target="_blank" href="https://sitevinitech.com.ar/catalogo-de-expositores/">Catálogo de Expositores SITEVINITECH.</a>
          </p>
          <div className="relative w-full" style={{ paddingBottom: '70%' }}>
            <Image
              src="/pedrooliverio.jpg"
              alt="pedro y oliverio"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-xs text-gray-500">Pedro Baziuk (izquierda), director de la Cámara y Oliverio Gabrielli (derecha), encargado del área comercial. </p>
        </div>
      </div>    
    </div>
  )
}