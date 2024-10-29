// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';


// export default async function LocaleLayout({
//   children,
//   params: {locale}
// }: {
//   children: React.ReactNode;
//   params: {locale: string};
// }) { 
  
 
//   return (
//     <html lang={locale}>
//       <body>
//           <Navbar />                    
//               {children}              
//           <Footer/>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCI",
  description: "CCI MAIN WEB",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html>
      <body className={inter.className}>   
        <Navbar/>              
            {children}          
        <Footer/>
      </body>
    </html>
  );
}
