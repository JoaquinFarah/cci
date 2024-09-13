import Image from "next/image"
import { login, signup } from './actions'

export default function Example() {
    return (
      <>

        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicio de sesion / Registro
            </h2>
            <h3 className="text-center text-gray-400">Si posee una cuenta ingrese. En caso de no tener cuenta registrese.</h3>
          </div>  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">            
            <form className="space-y-6">
            
            <div className="mb-5 mt-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required />
            </div>
  
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>  
  
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-1">

                <button
                  formAction={login}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ingresar
                </button>

                <button
                  formAction={signup}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrarse
                </button>

                
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  

