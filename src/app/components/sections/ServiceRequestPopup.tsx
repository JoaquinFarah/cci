"use client"
import Swal from 'sweetalert2';


const service = () =>{
    Swal.fire({
      title: 'El mas completo asesoramiento',
      html: `<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrjDvbDTQTTRwkgvfMPlVsfbkHssVDmZXXGGWnHmHqzmfNvGZXQFbHFXbgdkWWcGLWKGlq" target="_blank" autofocus><u>info@ccimendoza.com</u></a><br/> Andrade 30, Ciudad de Mendoza <br/>2617659988` ,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  };

export const ServicePopUp = () => {
  return (
    <div className="flex justify-start px-4 sm:px-6 lg:px-1">
        <button type="button" onClick={service} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Solicitar</button>
    </div>
  );
};