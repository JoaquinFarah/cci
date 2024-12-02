import Image from "next/image";
import Link from "next/link";


const Footer = () => {

  return (
    <footer className="mx-auto flex w-full flex-1 flex-wrap items-center justify-around p-4 gap-5 md:gap-0 bg-gradient-to-r from-green-500 via-white to-red-500">
          
      <Link href="/pages">  
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
          CCI Mendoza<br/>       
          Mail: info@ccimendoza.com <br/>
          Dirección: Andrade 30, Ciudad de Mendoza <br/>
          N° +549-261888775<br/> 
          
            <span className="text-xs font-bold mt-2">
              Created by <Link className="font-bold" href="https://www.linkedin.com/in/joaquin-farah-695a15213/" target="_blank"> @Bright Innovations</Link>
            </span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
