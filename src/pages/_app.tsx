// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css'; // Ensure the path to your global CSS is correct
import ScrollTo from "../app/ScrollTo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mushtaq&apos;s Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <ScrollTo />
    </>
  );
}

export default MyApp;
