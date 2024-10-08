import React from 'react'
import Image from 'next/image'

export default function minas() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h3 className="text-gray-400 mb-1">Mendoza, lunes 23 de septiembre. </h3>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La CCI en Radio La Red</h2>
        <div className="min-h-0.5 bg-gray-200 mb-4"></div>
        <div className="space-y-6">
          <p>
          El pasado 21 de septiembre, en del Día del Estudiante y de la Primavera, la Cámara de Comercio Italiana en Mendoza inauguró su espacio radial en el programa Economía Para Todo Público, emitido por Radio La Red (FM 94.1) y conducido por Antonio Ginart y Pablo Salvador.
          </p>

          <p>
          El Dr. Ing. Pedro Baziuk, director de la Cámara, junto a Oliverio Gabrielli, encargado del área comercial, representaron a la CCI en una amena charla donde se abordaron diversos temas. Se presentó a la audiencia la Cámara de Comercio Italiana, explicando quiénes somos y cuál es nuestra misión, se promocionó el programa Ospitalità Italiana nel Mondo y se compartieron detalles sobre nuestra próxima misión comercial en el exterior, SIMEI. Además, los representantes conversaron sobre temas variados y entretenidos junto a los conductores.  
          </p>
          
          

          <p>
            La participación en la Expo San Juan Minera 2024 permitió a la CCI promover no solo productos de alta tecnología italiana, sino también destacar la apertura comercial de Argentina en el sector minero. La reciente flexibilización en la importación de maquinaria y suministros para proyectos mineros, promovida por el nuevo Secretario de Minería, Luis Lucero, ha generado un entorno favorable para las empresas italianas interesadas en ingresar al mercado argentino.
          </p>

          <p>
          La CCI volverá a participar en el programa el próximo 12 de octubre, con más novedades y noticias para compartir.
          Para quienes deseen escuchar el espacio, pueden acceder al siguiente enlace: [insertar enlace].
          </p>

        </div>
      </div>   
      <div className="">
        <div className="relative w-full" style={{ paddingBottom: '70%' }}>
          <Image
            src="/radio.jpg"
            alt="Pedro Baziuk y Oliverio Gabrielli, junto con los representantes de Green Mining"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>  
        <p className="text-xs text-center text-gray-500 mt-2 mb-2">De izquierda a derecha: Oliverio Gabrielli, Pedro Baziuk.</p>
      </div>               
    </div>
  )
}