"use client"
import React from 'react'
import './customScrollbar.css';
export default function ProgressBar() {
  return (
    <div>
      <div className=' md:overflow-y-hidden space-y-5 overflow-hidden custom-scrollbar w-[66vw] max-h-[70vh] md:w-[20vw] pb-[10vh] md:pr-[0vw] md:'>
        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold retro-text font-vt323 text-primary" style={{paddingLeft:"1vw",}}>Django, Celery, Celery-Beats</h3>
            <span className="text-m retro-text font-vt323 text-primary">75%</span>
          </div>
          <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-primary text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div>
        </div>


        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m retro-text font-vt323 text-primary" style={{paddingLeft:"1vw",}}> Front-End(HTML, CSS, JS, React)</h3>
            <span className="text-m retro-text font-vt323 text-primary">80%</span>
          </div>
          <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "80%" }}></div>
          </div>
        </div>


        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m retro-text font-vt323 text-primary" style={{paddingLeft:"1vw",}}> Node.js</h3>
            <span className="text-m retro-text font-vt323 text-primary">40%</span>
          </div>
          <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "40%" }}></div>
          </div>
        </div>



        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold retro-text font-vt323 text-primary" style={{paddingLeft:"1vw",}}>Python</h3>
            <span className="text-m retro-text font-vt323 text-primary">85%</span>
          </div>
          <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "85%" }}></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m retro-text font-vt323 text-primary" style={{paddingLeft:"1vw",}}>Java</h3>
            <span className="text-m retro-text font-vt323 text-primary">65%</span>
          </div>
          <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "65%" }}></div>
          </div>
        </div>

        



        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m retro-text font-vt323 text-primary" style={{paddingLeft:"1vw",}}>C Language</h3>
            <span className="text-m retro-text font-vt323 text-primary">80%</span>
          </div>
          <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "80%" }}></div>
          </div>
        </div>






      </div>
    </div>
  )
}
