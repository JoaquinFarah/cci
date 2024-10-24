import React from 'react'
import Image from 'next/image'

export default function minas() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h3 className="text-gray-400 mb-1">Mendoza, viernes 19 de abril. </h3>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recepción de la comitiva de la Scuola Enologica Cerletti en Mendoza</h2>
        <div className="min-h-0.5 bg-gray-200 mb-4"></div>
        <div className="space-y-6">
          <p>
          En abril, la Cámara de Comercio Italiana de Mendoza tuvo el honor de recibir por segundo año consecutivo a la comitiva de estudiantes y profesores del prestigioso Instituto Enológico Cerletti, ubicado en Conegliano, Treviso, en la región del Véneto, Italia. Este intercambio cultural, liderado por los profesores Sabino Gallicchio y Giorgio Milani, forma parte de una gira por Latinoamérica que busca fortalecer los lazos académicos y culturales entre Italia y nuestra región.
          </p>

          <p>
          Durante la jornada, los estudiantes del Cerletti compartieron su experiencia hasta el momento en su recorrido por América Latina y se entabló un enriquecedor intercambio de información entre ambas instituciones. Además, se exploraron nuevas oportunidades de colaboración conjunta en el ámbito educativo y vitivinícola, destacando el valor del conocimiento y las prácticas enológicas en ambas culturas. 
          </p>

          <p>
          Tras la reunión, la delegación visitó el Consulado de Italia en Mendoza, donde fueron recibidos cálidamente por el cónsul Giuseppe D´Agosto. Este encuentro reafirmó el compromiso de continuar estrechando los vínculos entre ambas naciones a través de la educación y el sector vitivinícola.
          </p>

          <p>
          Al finalizar la jornada, los alumnos y profesores del Instituto Cerletti disfrutaron de una cena en la pizzería italiana Bigalia, junto a miembros de la Cámara, celebrando así un cierre perfecto de este importante día.
          </p>          
          
        </div>
      </div>   
      <div className="">
        <div className="relative w-full" style={{ paddingBottom: '90%' }}>
          <Image
            src="/comitiva.jpg"
            alt="comitiva scuola"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>  
        <p className="text-xs text-center text-gray-500">La comitiva del Instituto Cerletti, junto con la CCI, en la oficina del Cónsul de Italia, Giuseppe D’Agosto</p>

        <div className="relative w-full" style={{ paddingBottom: '90%' }}>
          <Image
            src="/reunion.jpg"
            alt="reunidos"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>  
        <p className="text-xs text-center text-gray-500 mb-2">La CCI y la comitiva del Instituto Cerletti, reunidos en las inmediaciones de Red Couch.</p>
      </div>               
    </div>
  )
}