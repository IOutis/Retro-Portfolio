"use client"
import React from 'react'

export default function ProgressBar() {
  // Helper function to convert skill level to percentage
  const getPercentage = (level) => {
    switch(level) {
      case 'Basic': return 40;
      case 'Intermediate': return 75;
      case 'Advanced': return 90;
      default: return 50;
    }
  };

  return (
    <div>
      <div className='md:overflow-y-hidden space-y-5 overflow-hidden custom-scrollbar md:w-[20vw] pb-2 xs:border-primary xs:border-2'>
        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Python</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Frontend Development</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>React & Next.js</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>C/C++</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Java</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Django</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Node.js</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Databases</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">75%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "75%" }}></div>
          </div> */}
        </div>

        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-m font-semibold font-vt323 text-primary" style={{paddingLeft:"1vw"}}>Machine Learning (Foundational)</h3>
            {/* <span className="text-m font-semibold font-vt323 text-primary">40%</span> */}
          </div>
          {/* <div className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#b89406] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "40%" }}></div>
          </div> */}
        </div>

      </div>
    </div>
  )
}