// 'use client'
// import { useState } from 'react';
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import { auth } from '@/app/firebase/config';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async () => {
//     try {
//         const res = await createUserWithEmailAndPassword(email, password)
//         console.log({res})
//         sessionStorage.setItem('user', true)
//         setEmail('');
//         setPassword('')

//     } catch(e){
//         console.error(e)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
//         <h1 className="text-white text-center text-2xl mb-5">Registro de cuenta</h1>
                
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
//         />
//         <button 
//           onClick={handleSignUp}
//           className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
//         >
//           Crear cuenta
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default SignUp;



'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario.
    
    try {
        const res = await createUserWithEmailAndPassword(email, password);
        console.log({ res });
        sessionStorage.setItem('user', true);
        setEmail('');
        setPassword('');
    } catch (e) {
        console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-center text-2xl mb-5">Registro de cuenta</h1>
        
        {/* El formulario envuelve los inputs */}
        <form onSubmit={handleSignUp}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          <button 
            type="submit" // Asegúrate de que el botón sea de tipo submit.
            className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
