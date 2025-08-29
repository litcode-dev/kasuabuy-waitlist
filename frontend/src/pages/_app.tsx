import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Urbanist } from 'next/font/google';
import '../app/globals.css';

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${urbanist.variable} antialiased font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);