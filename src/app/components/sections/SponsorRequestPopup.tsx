"use client"
import Swal from 'sweetalert2';


const sponsor = () =>{
    Swal.fire({
      title: 'Conviertase en parte de nuestros Sponsors',
      html: `Sea parte de nuestros sponsors asociados haciendo click 
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSds5h8OhmWbgCMtaxDvuo4AVzpV03mvcdJbMI3JCm2h0sXRDQ/viewform?usp=sf_link" target="_blank" autofocus><u>AQUI</u></a>` ,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  };

export const SponsorPopUp = () => {
  return (
    <div className="flex justify-start px-4 sm:px-6 lg:px-1">
        <button type="button" onClick={sponsor} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Conviertase en sponsor</button>
    </div>
  );
};
