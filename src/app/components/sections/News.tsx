"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';

const askMail = () =>{
  Swal.fire({
    title: 'Newsletter',
    text: 'Ingrese su mail para subscribirse ',    
    input: 'email',
    inputPlaceholder: "ejemplo@mail.com",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar',    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Gracias por subscribirte al newsletter",
        icon: "success"
      });
    }
  });
};


const callout = [
    // {
    //   id: 1,      
    //   href: '/es/news',
    //   imageUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdQr1lkzMWyBSS3BW8e44omV7OtyhbPDa_A&s',
    // },
    // {
    //     id: 2,      
    //     href: '/es/news',
    //     imageUrl:
    //         'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/818/2016031505482167d16d00201083a2b118dd5128dd6f59.jpg',
    // },
    // {
    //     id: 3,      
    //     href: '/es/news',
    //     imageUrl:
    //         'https://otslist.boletinoficial.gob.ar/static/app/css/logo-bora.png',
    // },
  
    // More posts...

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
      imageAlt: 'Mendoza news',
      href: '#',      
    },
  ]
  
  export default function NewsSection() {
    const t = useTranslations('NewsSection');
    return (
      <div className="bg-white py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('header')} </h2>
            <p className="mt-1 text-lg leading-8 text-gray-600">
              {t('header1')}
            </p>
          </div>


          {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-2 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <p className="text-gray-500">
                    {t('date1')}
                  </p>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {t('category1')}
                  </p>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {t('title1')}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{t('description1')}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">                      
                        <span className="absolute inset-0" />
                        {t('author1')}                      
                    </p>
                    <p className="text-gray-600">{t('media1')}</p>
                  </div>
                </div>
              </article>
            ))}
          </div> */}
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
              {callout.map((callout) => (
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



          <div className="flex justify-center mt-12">
            <button type="button" onClick={askMail} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">{t('button')}</button>
          </div>
          
        </div>
      </div>
    ) 
  }
  