"use client"
import React, { useState } from 'react';

const clientsData = [
    {
        id: '139900',
        name: 'Juan Perez',
        company: 'ACME',
        category: 'Explosivos',
        phone: '261448877',
        mail: 'juanperez@acme.com',
        address: 'Calle Falsa 123',
        city: 'Godoy Cruz',
        province: 'Mendoza',
        country: 'Argentina',  
        web: "www.acme.com"              
    },
    {
        id: '105601',
        name: 'Esteban Quito',
        company: 'ATOMO',
        category: 'Supermercados',
        phone: '261448877',
        mail: 'estebanquito@gmail.com',
        address: 'Calle larga 234',
        city: 'Las Heras',
        province: 'Mendoza',
        country: 'Argentina', 
        web: "www.atomo.com"       
    },
    {   
        id: '124452',
        name: 'Gabriel Pereira',
        company: 'DRTV',
        category: 'Television',
        phone: '261448877',
        mail: 'gapereira@directv.com',
        address: 'Calle Soleada 923',
        city: 'Dorrego',
        province: 'Mendoza',
        country: 'Argentina',
        web: "www.directv.com"        
    },
    {
        id: '091487',
        name: 'Joaquin Farah',
        company: 'Bright Innovations',
        category: 'Programacion',
        phone: '261448877',
        mail: 'joaquinefarah@gmail.com',
        address: 'Perito Moreno 2554',
        city: 'Godoy Cruz',
        province: 'Mendoza',
        country: 'Argentina', 
        web: "www.brightinnovations.com"       
    },
    {
        id: '011102',
        name: 'Jorge Mendoza',
        company: 'La Continental',
        category: 'Pasteleria',
        phone: '261448877',
        mail: 'jmendoza@hotmail.com',
        address: 'Hudson 44',
        city: 'Guaymallen',
        province: 'Mendoza',
        country: 'Argentina', 
        web: "www.lacontinental.com"       
    },
    {
      id: '051602',
      name: 'Jorge Ariel Plus',
      company: 'JAMASP',
      category: 'Papeleria',
      phone: '261448877',
      mail: 'jamas@gmail.com',
      address: 'Las Heras 44',
      city: 'Ciudad',
      province: 'Mendoza',
      country: 'Argentina',  
      web: "www.asyc.com"      
  },
  {
    id: '051602',
    name: 'Victoria Cervi',
    company: 'Tekno',
    category: 'Pinturas',
    phone: '261678954',
    mail: 'virtoriacervi@tekno.com',
    address: 'Colon 224',
    city: 'Ciudad',
    province: 'Mendoza',
    country: 'Argentina',  
    web: "www.tekno.com"      
},
    

];

export default function OtherPartnersPage() {
  const [selectedClient, setSelectedClient] = useState(null);

  // Manejador de selección de cliente
  const handleClientSelect = (event:any) => {
    const clientId = event.target.value;
    const client = clientsData.find((client) => client.id === clientId);
    setSelectedClient(client || null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bienvenido, selecciona un cliente
          </h2>
          <div className="min-h-0.5 bg-gray-200 mb-4 mt-4"></div>

          {/* Dropdown para seleccionar cliente */}
          <div className="mb-6">
            <label
              htmlFor="client-select"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Seleccione un cliente:
            </label>
            <select
              id="client-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleClientSelect}
              defaultValue=""
            >
              <option value="">Seleccione un cliente</option>
              {clientsData.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mostrar tarjeta del cliente seleccionado */}
          {selectedClient && (
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <h3 className="text-base font-semibold text-gray-900 border-2 px-2 py-2 border-rose-500 rounded-md hover:drop-shadow-lg transition-all">
                  <div>
                    <span className="text-blue-400">ID:</span> {selectedClient.id} <br />
                    <span className="text-blue-400">Nombre:</span> {selectedClient.name} <br />
                    <span className="text-blue-400">Empresa:</span> {selectedClient.company} <br />
                    <span className="text-blue-400">Rubro:</span> {selectedClient.category} <br />
                    <span className="text-blue-400">Teléfono:</span> {selectedClient.phone} <br />
                    <span className="text-blue-400">Email:</span> {selectedClient.mail} <br />
                    <span className="text-blue-400">Dirección:</span> {selectedClient.address} <br />
                    <span className="text-blue-400">Localidad:</span> {selectedClient.city} <br />
                    <span className="text-blue-400">Provincia:</span> {selectedClient.province} <br />
                    <span className="text-blue-400">País:</span> {selectedClient.country} <br />
                    <span className="text-blue-400">Web:</span> {selectedClient.web} <br />
                  </div>
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
