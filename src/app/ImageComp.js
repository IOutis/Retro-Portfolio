"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageComp() {
  const [image, setImage] = useState('/M.jpeg');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const images = ['/M.jpeg', '/MMH.jpg']; 

    const intervalId = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div  style={{ aspectRatio: 1/1 ,width:"fit-content"}}>
      <Image 
        src={image}
        alt="M"
        width={270}
        height={200}
        className={`w-[270] h-[200] md:w-[900] img-transition ${fade ? 'fade-out' : ''}`}
        
      />
    </div>
  );
}
