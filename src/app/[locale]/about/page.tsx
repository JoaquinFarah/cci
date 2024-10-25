import Image from "next/image";


const people = [
  {
    name: 'Enrique PESCARMONA',
    role: 'PRESIDENTE',
    company: '-Grupo I.M.P.S.A',
    imageUrl:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    name: 'Guillermo ALTIERI',
    role: 'VICEPRESIDENTE',
    company: '-Altieri S.A.',
    imageUrl:
      'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Victoria CERVI',
    role: 'VICEPRESIDENTE',
    company: '-Tekno Argentina S.R.L.',
    imageUrl: "/traje.jpg",
  },
  {
    name: 'Ernesto DOMIZIO',
    role: 'TESORERO',
    company: '-Sabino Domizio S.A.',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Sergio MARTINI',
    role: 'TESORERO',
    company: '-Martini Cables',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Clara FRANCIOSI',
    role: 'CONSEJERO TITULAR',
    company: '-Barmatic',
    imageUrl: "/traje.jpg",
  },
  {
    name: 'Eduardo DE BLASI',
    role: 'CONSEJERO TITULAR',
    company: '-De Blasi S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Jesús SILVESTRINI',
    role: 'CONSEJERO TITULAR',
    company: '-Incotec S.A.',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Silvia CENTELEGHE',
    role: 'CONSEJERO TITULAR',
    company: '-Proplanta S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Victor TITTARELLI',
    role: 'CONSEJERO TITULAR',
    company: '-Endumel S.R.L.',
    imageUrl: "/traje.jpg",
  },
  {
    name: 'Carlos CROTTA',
    role: 'CONSEJERO SUPLENTE',
    company: '-Bodega Crotta S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Luis PIAZZA',
    role: 'CONSEJERO SUPLENTE',
    company: '-Grupo Service Men S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Mario PALCHETTI',
    role: 'CONSEJERO SUPLENTE',
    company: '-Acys S.A.',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Orlando DAL POZZO',
    role: 'CONSEJERO SUPLENTE',
    company: '-Albion S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Jorge PERONE',
    role: 'REVISOR de CUENTAS TITULAR',
    company: '-I.M.P.S.A.',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Vicente TROVATO',
    role: 'REVISOR de CUENTA SUPLENTE',
    company: '-Frigorífico Trovato S.R.L.',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Estanislao Pedro BAZIUK',
    role: 'SECRETARIO GENERAL',
    company: '',
    imageUrl: "/traje.jpg",
  },
  {
    name: 'Jorge D’ODORICO',
    role: 'PRESIDENTE San Luis',
    company: '',
    imageUrl: "/traje2.jpg",
  },
  {
    name: 'Raul VARESE',
    role: 'VICEPRESIDENTE San Luis',
    company: '',
    imageUrl: "/traje1.jpg",
  },
  {
    name: 'Corrado COMASTRI',
    role: 'TESORERO San Luis',
    company: '',
    imageUrl: "/traje.jpg",
  },
  

]

export default function AboutPage() {
 
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-32 gap-y-20 px-6 lg:px-1 xl:grid-cols-1">
        <div className="max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Quiénes somos?</h2>
          <div className="min-h-0.5 bg-gray-200 mb-4 mt-4"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
          La Cámara de Comercio Italiana en Mendoza es una asociación de derecho privado, con estructura electiva y compuesta por empresarios, dirigentes, comerciantes y profesionales. 
          
          Fue fundada el 17 de abril de 1989 y reconocida oficialmente por el Gobierno Italiano por Decreto del Ministerio de Comercio Exterior el 17 de mayo de 1999.

          Tiene como objetivo principal el desarrollo de las relaciones empresarias, comerciales, industriales, tecnológicas, formativas y culturales entre Argentina e Italia, como así también con todos los países donde tienen sede las Cámaras de Comercio Italianas en el mundo.

          Para ello la CCI Mendoza brinda asistencia, información económica, comercial y tecnológica, activa contactos, organiza misiones, participa en ferias y otros eventos y potenciando toda acción a favor del crecimiento y desarrollo regional.

          Es miembro activo de `Assocamerestero` (Asociación de Cámaras de Comercio Italianas en el mundo), con sede en Roma.           
          </p>
          <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">Misión</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
          Estimular y promover el comercio y las inversiones entre Argentina, Italia y el resto del mundo.                       
          </p>
          <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">Visión</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
          CCI Mendoza es una organización capaz de gestionar e impulsar servicios empresariales, en diferentes sectores económicos, entre empresas y emprendedores argentinos, italianos y el resto del mundo, difundiendo, apoyando y utilizando las conferencias binacionales firmadas entre Italia y Argentina.                       
          </p>
          <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">Principios y Valores</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
          • Desarrollar contactos con organizaciones, entidades, asociaciones y operadores económicos de los países de interés de las partes para permitir el desarrollo de las relaciones económicas y comerciales.
          </p>
          <p className="text-lg leading-8 text-gray-600 text-pretty">
          • Desarrollar acciones de información, formación y consultoría a través de: revistas, boletines, bases de datos especializadas , webs, congresos, asociaciones, ferias y misiones económicas y comerciales.
          </p>
          <p className="text-lg leading-8 text-gray-600 text-pretty">
          • Organizar cursos de difusión de la cultura económica.
          </p>
          <p className="text-lg leading-8 text-gray-600 text-pretty">
          • Intervenir si las partes así lo deciden, como árbitro imparcial para resolver disputas entre operadores de diferentes países.
          </p>
          <p className="text-lg leading-8 text-gray-600 text-pretty">
          • Establecer contactos permanentes de colaboración con organismos e instituciones argentinos e italianos.
          </p>                   
          
        </div>
        {/* <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-8 xl:col-span-1">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-2 bg-gradient-to-r from-white to-cyan-100 rounded-full shadow-lg ">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <h3 className="text-base leading-7 tracking-tight text-gray-900">{person.company}</h3>                  
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
      {/* <div className="flex justify-center mt-20 mb-4">
        <Image
          src={"/organigrama.jpg"}
          alt={"img1"}
          width={600}
          height={600}
          />  
      </div>    */}
    </div>
  )
}
