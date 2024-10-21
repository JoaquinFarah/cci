"use client"
import Swal from 'sweetalert2';


const services = () =>{
    Swal.fire({
      title: 'Solicite nuestros servicios',
      html: `Para recibir el mejor asesoramiento haga click 
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5MFqeKQvScQZpxmZ0ugIknLIPuRwpjd2YNSj1Y3VDpe37Bw/viewform" target="_blank" autofocus><u>AQUI</u></a>` ,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  };

export const ServicePopUp = () => {
  return (
    <div className="flex justify-start px-4 sm:px-6 lg:px-1">
        <button type="button" onClick={services} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Solicitar</button>
    </div>
  );
};
