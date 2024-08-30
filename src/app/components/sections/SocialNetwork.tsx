import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';



export default function SocialNetworkSection() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <Image
              src={"/socialnetworks1.jpg"}
              alt={"social"}
              // layout="fill"
              // objectFit="cover"
              width={1000}
              height={1000}
              className="h-52 w-full"
            />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">        
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">          
            Social Networks<br/>Seguinos en nuestras redes
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Link href="https://www.facebook.com/ypfoficial" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-blue-600 transition-colors lg:col-span-1">
                <FaFacebookF size={48} />
              </div>
            </Link>
            <Link href="https://twitter.com/YPFoficial" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-blue-400 transition-colors lg:col-span-1">
                <FaTwitter size={48} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/ypfoficial/" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-pink-500 transition-colors lg:col-span-1">
                <FaInstagram size={48} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/ypf" >
              <div className="col-span-2 max-h-12 w-full flex justify-center items-center text-gray-900 hover:text-blue-700 transition-colors sm:col-start-2 lg:col-span-1">
                <FaLinkedinIn size={48} />
              </div>
            </Link>
            {/* Puedes agregar más íconos si lo deseas */}
          </div>
        </div>
      </div>
    );
  }
  