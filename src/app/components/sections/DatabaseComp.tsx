"use client";
import React, { useState } from 'react';


type Client = {
  id: string;
  name: string;
  category: string;
  city: string;
  province: string;
  country: string;
};

const clientsData: Client[] = [
  {
    id: '100512',
    name: 'Tecnologia Vitivinicola Mendocina',
    category: 'Vitivinicultura',
    city: 'Godoy Cruz',
    province: 'Mendoza',
    country: 'Argentina',
  },
];

export default function DatabaseComp() {
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
              Nuestras bases de datos:
            </label>
            <select
              id="client-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleClientSelect}
              defaultValue=""
            >
              <option value="">Seleccione una base de datos</option>
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
                    <span className="text-blue-400">Rubro:</span> {selectedClient.category} <br />                    
                    <span className="text-blue-400">Localidad:</span> {selectedClient.city} <br />
                    <span className="text-blue-400">Provincia:</span> {selectedClient.province} <br />
                    <span className="text-blue-400">País:</span> {selectedClient.country} <br />
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

