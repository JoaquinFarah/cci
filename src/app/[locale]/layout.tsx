import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const locales = ['es', 'it'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) { unstable_setRequestLocale(locale);
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />          
            {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}