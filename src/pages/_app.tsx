// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css'; // Make sure to use the correct path to your global CSS
import ScrollTo from "../app/ScrollTo"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11" async></script>
      </Head>
      <Component {...pageProps} />
      <ScrollTo></ScrollTo>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
