"use client"
import Swal from 'sweetalert2';


const database = () =>{
    Swal.fire({
      title: 'Solicite nuestras bases de datos',
      html: `Haga click
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScpQGndfz8vROQ2lEGQ0Fweb9Sp_TTtGuxBGqUgFD3F03f7Mw/viewform?usp=sf_link" target="_blank" autofocus><u>AQUI</u></a><br/>`,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  };

export const DatabasePopUp = () => {
  return (
    <div className="flex justify-start px-4 sm:px-6 lg:px-1">
        <button type="button" onClick={database} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Solicitar base de datos</button>
    </div>
  );
};