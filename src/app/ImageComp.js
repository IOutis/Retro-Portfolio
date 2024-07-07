"use client";
import React, { useState,useEffect } from 'react';

export default function ImageComp() {
  const [image, setImage] = useState('/M.jpeg');
  const images = ['/M.jpeg','/MMH.jpg']
  const [fade,setFade]=useState(false)
  useEffect(() => {
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
    }, 2000); 
    
    return () => clearInterval(intervalId);
  }, [images]);
  
  return (
    <div>
      <img src={image} alt="M" width={270} height={200} className={`img-transition ${fade ? 'fade-out' : ''}`}/>
    </div>
  );
}
