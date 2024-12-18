"use server"
import { login } from './actions'
import { logout } from '../logout/actions';
import { createClient } from '../../../../utils/supabase/server';


export default async function LoginPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicio de sesión / Registro <br/>
            {data?.user?.email ? data.user.email : null}
          </h2>
          <h3 className="text-center text-gray-400">
            Si posee una cuenta ingrese. En caso de no tener cuenta, regístrese.
          </h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div className="mb-5 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@mail.com"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>              
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="************"
              />
              <form className="text-sm">
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpgXRsflHTZwMPTjrjjMFDjVqMlmGlgbcVDqncZSRsqPtMrnCGvMJNPgSzVJdwzpZfBPTr" target="_blank" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    ¿Ha olvidado su contraseña?
                  </a>
              </form>
              
            </div>
            
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-1">
              <button
                formAction={login}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>           

              <form>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9wlSre-Itnu2L_qWVj18VjSsemJgq8Yt9x6T0qmq2Vhs-tQ/viewform?usp=sf_link" target="_blank" 
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Registrarse
                </a>
              </form>
            </div>
          </form>
          
          <form action={logout} className="mt-6">
            <button
              type= "submit" 
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cerrar Sesión
            </button>
          </form>          
        </div>
      </div>
    
  );
}
