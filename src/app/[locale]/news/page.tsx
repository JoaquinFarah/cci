import React from 'react';
import { useTranslations } from 'next-intl';


const callouts = [
    {
      name: 'Italia',
      description: 'Lacrado en botellas, el ritual de conservar y distinguir al vino al que le llegó la hora de su mecanización',
      imageSrc: 'https://www.infocampo.com.ar/wp-content/uploads/2024/05/Lacre--e1716562755197.jpg',
      imageAlt: 'Botella',
      href: 'https://www.infocampo.com.ar/lacrado-en-botellas-el-ritual-de-conservar-y-distinguir-al-vino-al-que-le-llego-la-hora-de-su-mecanizacion/',
    },
    {
      name: 'Importaciones',
      description: '“Estamos esperando alguna normativa que motorice la importación de tecnologías vitivinícolas”',
      imageSrc: 'https://www.infocampo.com.ar/wp-content/uploads/2024/05/Enologia-vino-e1716397655720.jpg',
      imageAlt: 'Cilindros de Acero',
      href: 'https://www.infocampo.com.ar/estamos-esperando-alguna-normativa-que-motorice-la-importacion-de-tecnologias-vitivinicolas/',
    },
    {
      name: 'Sitevinitech',
      description: 'Exitosa participación de la CCI en SITEVINITECH 2024',
      imageSrc: '/sitevinitech.jpeg',
      imageAlt: 'sitevinitech',
      href: '/es/news/articles/sitevinitech2024',      
    },
    {
      name: 'Tragedia en el Mar',
      description: 'La guardia costera italiana limita las posibilidades de hallar supervivientes del naufragio en Sicilia: "Creemos que están dentro del barco"',
      imageSrc: 'https://estaticos-cdn.prensaiberica.es/clip/2a329234-77e4-46be-b947-7faed8a2ae08_16-9-discover-aspect-ratio_default_0.jpg',
      imageAlt: 'World news',
      href: 'https://www.elperiodico.com/es/internacional/20240820/italia-busqueda-multimillonario-britanico-mike-lynch-naufragio-sicilia-107172497',
    },    
    {
      name: 'Global news',
      description: 'El las relaciones internacionales en Europa',
      imageSrc: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/media-assets/image/20240224_DE_US.jpg',
      imageAlt: 'World news',
      href: '#',
    },
    {
      name: 'Ferias',
      description: 'CCI invita a productores frutihortícolas y exportadores a participar online en la Macfrut 2024 de Italia',
      imageSrc: 'https://enolife.com.ar/es/wp-content/uploads/2024/04/Macfrut-2024-1024x440.jpg',
      imageAlt: 'Expo',
      href: 'https://enolife.com.ar/es/cci-invita-a-productores-frutihorticolas-y-exportadores-a-participar-online-en-la-macfrut-2024-de-italia/',
    },
    {
      name: 'Ferias',
      description: 'Simei 2024: destilados, cerveza y aceite de oliva tendrán su lugar junto al vino y toda la tecnología',
      imageSrc: 'https://enolife.com.ar/es/wp-content/uploads/2024/06/Imagen2-10-1024x440.jpg',
      imageAlt: 'simei',
      href: 'https://enolife.com.ar/es/simei-2024-destilados-cerveza-y-aceite-de-oliva-tendran-su-lugar-junto-al-vino-y-toda-la-tecnologia/',
    },
    {
      name: 'Ferias',
      description: 'La Cámara de Comercio Italiana en Mendoza ofrece beneficios para viajar a la Feria Simei Milán',
      imageSrc: 'https://enolife.com.ar/es/wp-content/uploads/2024/06/immagine_elenco_simei_2022_dettagli_1600px-1024x440.jpg',
      imageAlt: 'embotelladora',
      href: 'https://enolife.com.ar/es/la-camara-de-comercio-italiana-en-mendoza-ofrece-beneficios-para-viajar-a-la-feria-simei-milan/',
    },
    {
      name: 'San Juan',
      description: 'La Cámara de Comercio Italiana en la Expo San Juan Minera 2024: Promoviendo el Made in Italy en el Sector Minero Argentino',
      imageSrc: '/exposj.jpeg',
      imageAlt: 'expo',
      href: '/es/news/articles/minassj2024',
    },
    {
      name: 'UNCuyo',
      description: 'Éxito rotundo en las Jornadas de Ciencias Económicas de la UNCuyo con participación de la Cámara de Comercio Italiana de Mendoza',
      imageSrc: 'https://educacion.uncuyo.edu.ar/cache/escudo_uncuyo_546_966.jpg',
      imageAlt: 'unc',
      href: '/es/news/articles/uncuyo',
    },
    {
      name: 'Difusion',
      description: 'La CCI en Radio La Red',
      imageSrc: '/radio.jpg',
      imageAlt: 'lared',
      href: '/es/news/articles/radio',
    },
    {
      name: 'Ferias',      
      description: 'MACFRUT 2024: La Feria Internacional de Frutas y Verduras',
      imageSrc: 'https://cdn-italiani-media.italiani.it/site-rionegro/sites/96/2024/01/macfrut24-1000x411.jpg',
      imageAlt: 'mcf',
      href: '/es/news/articles/macfrut2024',
    },
    {
      name: 'Gastronomia',
      description: 'Ospitalità Italiana: Un reconocimiento a la excelencia en la gastronomía',
      imageSrc: '/Logo.jpg',
      imageAlt: 'mdita',
      href: '/es/news/articles/ospitalita',
    },
    {
      name: 'Internacionales',
      description: 'Recepción de la comitiva de la Scuola Enologica Cerletti en Mendoza',
      imageSrc: '/instconegliano.jpeg',
      imageAlt: 'inst',
      href: 'scuolacerletti',
    },


    
    
    
    
    
    
    // {
    //   name: '',
    //   description: '',
    //   imageSrc: '',
    //   imageAlt: '',
    //   href: '',
    // },
    
  ]
  
  export default function NewsPage() {
    const t = useTranslations('NewsPage');
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')} </h2>
            <div className="min-h-0.5 bg-gray-200 mb-4"></div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative rounded-lg px-1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80">
                  <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-500 px-4">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 mb-6 text-left px-4">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  