import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCI",
  description: "CCI MAIN WEB",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const messages = await getMessages();
  
  return (
    <html lang="es">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>         
            {children}          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
