"use client";
import React, { useState } from 'react';

// Tipo de cliente
type Client = {
  id: string;
  name: string;
  company: string;
  category: string;
  phone: string;
  mail: string;
  address: string;
  city: string;
  province: string;
  country: string;
  web: string;
};

const clientsData: Client[] = [
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
    web: 'www.acme.com',
  },
];

export default function PartnersComp() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleClientSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const clientId = event.target.value;
    const client = clientsData.find((client) => client.id === clientId);
    setSelectedClient(client || null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-1">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-1">
          <div className="mb-6">
            <label
              htmlFor="client-select"
              className="block mb-2 text-xl font-bold text-gray-900"
            >
              Nuestra red de socios:
            </label>
            <select
              id="client-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleClientSelect}
              defaultValue=""
            >
              <option value="">Seleccione un socio</option>
              {clientsData.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>

          {selectedClient && (
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <h3 className="text-base font-semibold text-gray-900 border-2 px-2 py-2 border-indigo-500 rounded-md hover:drop-shadow-lg transition-all">
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

