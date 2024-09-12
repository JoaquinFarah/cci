'use client'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        sessionStorage.setItem('user', true)
        setEmail('');
        setPassword('');
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h3 className="text-white text-lg mb-5 text-center">Si posee una cuenta inicie sesion. En caso de que no tenga una, registrese.</h3>
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
        <button onClick={handleSignIn} className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500">
          Iniciar sesion
        </button>

        <div className="h-0.5 bg-gray-400 mt-3"></div>

        <div className="h-auto mt-3 flex items-center justify-center">
            <button onClick={handleSignIn} className="w-auto p-3 bg-green-600 rounded text-white hover:bg-green-700">
            Crear cuenta
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;