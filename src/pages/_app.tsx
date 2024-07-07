// src/pages/_app.tsx
import { AppProps } from 'next/app';
import '../app/globals.css'; // Ensure the path to your global CSS is correct
import ScrollTo from "../app/ScrollTo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollTo />
    </>
  );
}

export default MyApp;
