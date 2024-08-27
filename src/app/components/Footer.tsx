import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
const t = useTranslations('FooterSection');

  return (
    <footer className="mx-auto flex w-full flex-1 flex-wrap items-center justify-around p-4 gap-5 md:gap-0 bg-gradient-to-r from-green-500 via-white to-red-500">
    {/* <footer className="mx-auto flex w-full flex-1 flex-wrap items-center justify-around p-4 gap-5 md:gap-0 bg-gray-100"> */}
      
      <Link href="/">  
        <Image
          src="/Logo_CCI.jpeg"
          alt="Logo"
          width={0}
          height={0}
          sizes="300vw"
          className="h-20 w-auto drop-shadow-2xl rounded-lg"
          priority
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-1 cursor-default select-none">
        <p className="text-xs font-semibold"> 
          {t('title')} <br/>        
          Mail: info@ccimendoza.com <br/>
          {t('address')}: Granaderos 30, Ciudad de Mendoza 
        </p>
        <p className="text-xs font-bold">
          Created by <Link className="font-bold" href="https://www.linkedin.com/in/joaquin-farah-695a15213/" target="_blank">Joaquin Farah</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;