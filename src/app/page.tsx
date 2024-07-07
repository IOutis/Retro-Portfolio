import Image from "next/image";
import React from "react";
import Typing from './Typing'
import Description from './Description'
import ScrollTo from './ScrollTo';
import StatSide from './StatSide';
import ProgressBar from './ProgressBar'
import ImageComp from './ImageComp'
import Contact from './Contact'
import Cards from './cards'

export default function Home() {
  return (
    <div className="old-crt-monitor retro-text font-vt323 h-screen overflow-hidden" style={{maskImage:"linear-gradient(to bottom, #0005 50%, #000 50%)", maskSize:"100% 2px"}}>
      <main className="max-w-[1000px] mx-auto px-4 sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%]" style={{paddingTop:"-10vh", margin:"auto",width:"100vw",height:"100vh",}}>
        <div style={{height:"5vh",marginTop:"auto",position:"relative",top:"3vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",paddingBottom:"13vh"}}><Typing></Typing></div>
        <ScrollTo />

        <br />
      
          <div className="retro-text flex justify-between -mx-4 " style={{width:"75vw",paddingTop:"3vh", paddingBottom:"6vh", paddingLeft:"10vw"}}>
        <a href="#home" style={{textDecoration:"blank"}}>
          <div className="flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" style={{height:10,}}>
            <button className="text-primary text-shadow-custom font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize: "22px",}}>Home</button>
          </div></a>
          <a href="#stats" style={{textDecoration:"blank"}}><div className="retro-text flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" style={{height:10, }}>
            <button className="text-primary text-shadow-custom font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize: "22px"}}>STATS</button>
          </div></a>
          <a href="#contact" style={{textDecoration:"blank"}}><div className="retro-text flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" style={{height:10,}}>
            <button className="text-primary text-shadow-custom font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize: "22px"}}>Links</button>
          </div></a>
        </div>
        
        <section id="home" className="flex md:flex-col section " style={{ width: "80vw", height: "50vh",marginLeft:"4vw" }}>
  <div className="grid-cols-3" style={{ width: "90vw",  }}>
    {/* Wrap the image and description in a flex container */}
    <div style={{ display: 'flex', flexDirection: 'row', }}>
      <div className="border-4 border-primary" style={{ width: 323, height: 270,marginRight:"3vw"}}>
        <ImageComp></ImageComp>
      </div>
      <div style={{paddingLeft:"4vw", width:"40vw"}}>
        <Description />
      </div>
    <div style={{marginLeft:"5vw", marginRight:"10vw"}}>
        <ProgressBar></ProgressBar>
    </div>
    </div>
  </div>
</section>


        <section id="stats" className="section" style={{marginLeft:"0vw"}}>
          <StatSide />
        </section>

        <section id="contact" className="section">
          <Contact></Contact>

          
        </section>
      </main>
    </div>
  );
}
