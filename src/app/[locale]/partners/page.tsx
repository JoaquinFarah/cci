import React from 'react';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation'
import { createClient } from '../../../../utils/supabase/server'


const data = [
    {
        name: 'Juan Perez',
        company: 'ACME',
        category: 'Explosivos',
        phone: '261448877',
        mail: 'juanperez@acme.com',
        address: 'Calle Falsa 123',
        city: 'Godoy Cruz',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
        name: 'Esteban Quito',
        company: 'ATOMO',
        category: 'Supermercados',
        phone: '261448877',
        mail: 'estebanquito@gmail.com',
        address: 'Calle larga 234',
        city: 'Las Heras',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
        name: 'Gabriel Pereira',
        company: 'DRTV',
        category: 'Television',
        phone: '261448877',
        mail: 'gapereira@directv.com',
        address: 'Calle Soleada 923',
        city: 'Dorrego',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
        name: 'Joaquin Farah',
        company: 'Bright Innovations',
        category: 'Programacion',
        phone: '261448877',
        mail: 'joaquinefarah@gmail.com',
        address: 'Perito Moreno 2554',
        city: 'Godoy Cruz',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
        name: 'Jorge Mendoza',
        company: 'La Continental',
        category: 'Pasteleria',
        phone: '261448877',
        mail: 'jmendoza@hotmail.com',
        address: 'Hudson 44',
        city: 'Guaymallen',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
        name: 'Gabriel Pereira',
        company: 'DRTV',
        category: 'Television',
        phone: '261448877',
        mail: 'gapereira@directv.com',
        address: 'Calle Soleada 923',
        city: 'Dorrego',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
        name: 'Esteban Quito',
        company: 'ATOMO',
        category: 'Supermercados',
        phone: '261448877',
        mail: 'estebanquito@gmail.com',
        address: 'Calle larga 234',
        city: 'Las Heras',
        province: 'Mendoza',
        country: 'Argentina',        
    },
    {
      name: 'Gabriel Pereira',
      company: 'DRTV',
      category: 'Television',
      phone: '261448877',
      mail: 'gapereira@directv.com',
      address: 'Calle Soleada 923',
      city: 'Dorrego',
      province: 'Mendoza',
      country: 'Argentina',        
  },
  {
    name: 'Gabriel Pereira',
    company: 'DRTV',
    category: 'Television',
    phone: '261448877',
    mail: 'gapereira@directv.com',
    address: 'Calle Soleada 923',
    city: 'Dorrego',
    province: 'Mendoza',
    country: 'Argentina',        
},
{
  name: 'Gabriel Pereira',
  company: 'DRTV',
  category: 'Television',
  phone: '261448877',
  mail: 'gapereira@directv.com',
  address: 'Calle Soleada 923',
  city: 'Dorrego',
  province: 'Mendoza',
  country: 'Argentina',        
},






]

export default function PartnersPage() {
    const t = useTranslations('PartnersPage'); 
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')} </h2>
            <div className="min-h-0.5 bg-gray-200 mb-4 mt-4"></div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {data.map((data) => (
                <div key={data.name} className="group relative">
                  {/* <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={data.imageAlt}
                      src={data.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div> */}
                  <h3 className=" text-base font-semibold text-gray-900 border-2 px-2 py-2 border-rose-500 rounded-md hover:drop-shadow-lg transition-all">
                    <div>
                      <span className="absolute inset-0" />
                      <span className="text-blue-400">Nombre:</span> {data.name} <br/>
                      <span className="text-blue-400">Empresa:</span> {data.company} <br/>
                      <span className="text-blue-400">Rubro:</span> {data.category} <br/>
                      <span className="text-blue-400">Telefono:</span> {data.phone} <br/>
                      <span className="text-blue-400">Email:</span> {data.mail} <br/>
                      <span className="text-blue-400">Direccion:</span> {data.address} <br/>
                      <span className="text-blue-400">Localidad:</span> {data.city} <br/>
                      <span className="text-blue-400">Provincia:</span> {data.province} <br/>
                      <span className="text-blue-400">Pais:</span> {data.country} <br/>
                    </div>
                  </h3>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  