"use client"
import Swal from 'sweetalert2';


const askService = () =>{
    Swal.fire({
        title: 'Solicitud de servicio',
        html: `Escribanos a:
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrjDvbDTQTTRwkgvfMPlVsfbkHssVDmZXXGGWnHmHqzmfNvGZXQFbHFXbgdkWWcGLWKGlq" target="_blank" autofocus><u>info@ccimendoza.com</u></a> </br> indicandonos su nombre, n° de socio y el servicio solicitado.</br>
        </br>No es socio? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFIbVYx0fyH8RVm_8cK07Dzt3qgTBY29vmQmM-WP4lcx_IWg/viewform" target="_blank" autofocus><u>Registrese</u></a>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    })
  };

export const RadioPopUp = () => {
  return (
    <div className="flex justify-start px-4 sm:px-6 lg:px-1">
        <button type="button" onClick={askService} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Agendar turno</button>
    </div>
  );
};