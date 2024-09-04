'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';


export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  
  return (    
    <label className='border-5 rounded items-center hover:cursor-pointer' > 
      <p className='sr-only items-center'></p>       
      <select
        defaultValue={localActive}
        className='bg-transparent'
        onChange={onSelectChange}
        disabled={isPending}        
      >       
        <option value='it' className="font-semibold ">Italiano</option>
        <option value='es' className="font-semibold ">Español</option>
      </select>
    </label>
  );
}