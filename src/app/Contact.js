"use client"
import React from 'react';

export default function Contact() {
  
  return (
    <div>
    <div className='flex flex-col justify-center overflow-y-scroll ml-[3vw] overflow-x-hidden custom-scrollbar md:overflow-y-hidden md:flex-row md:ml-[10vw] md:justify-stretch'>
      <div style={{ marginRight: '11vw' }}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> 
          </svg> mohdmushtaq251@gmail.com
        </span>
      </div>

      <div style={{ marginRight: '11vw' }}>
        <a href="https://github.com/IOutis/" target='_blank'>
          <span>
            <svg className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg> Github
          </span>
        </a>
      </div>

      <div style={{ marginRight: '11vw' }}>
        <a href="https://www.instagram.com/hussain.mohammedmushtaq/" target="_blank">
          <svg className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg> Instagram
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/md-mushtaq-hussain" target='_blank'>
          <svg className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg> LinkedIn
        </a>
      </div>
      

    </div>
      <div className='flex flex-row justify-center items-center mt-[3vh] md:mt-[6vh] md:text-xl'>
        <p>You can view my Resume<a href="https://drive.google.com/file/d/1azcVv1nL0unHf6HTf9NBnHGPzf05GPlW/view?usp=sharing" target='_blank'> Here⬅️</a></p>
      </div>
    </div>
  );
}
