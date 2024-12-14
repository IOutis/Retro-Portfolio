// src/pages/_app.tsx
"use client"
import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';
import ScrollTo from "../app/ScrollTo";
import { ThemeProvider } from 'next-themes';



function MyApp({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState("#home");
  
  return (
    <ThemeProvider forcedTheme="dark" attribute="class">
      <Head>
        <title>Mushtaq&apos;s Portfolio</title>
      </Head>
      <div className="dark">
        <Component {...pageProps} />
        <ScrollTo setActiveSection={setActiveSection}/>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;