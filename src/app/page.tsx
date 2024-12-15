"use client";
import Image from "next/image";
import React, { useState } from "react";
import Typing from "./Typing";
import Description from "./Description";
import ScrollTo from "./ScrollTo";
import StatSide from "./StatSide";
import ProgressBar from "./ProgressBar";
import ImageComp from "./ImageComp";
import Contact from "./Contact";
import { HyperText } from "./HyperText";
import WordFadeIn from "./WordFade";

export default function Home() {
  const [activeSection, setActiveSection] = useState("#home");
  
  const handleClick = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div
      className="dark max-w-full container old-crt-monitor retro-text font-vt323 w-screen h-full overflow-y-scroll overflow-x-hidden custom-scrollbar md:overflow-y-scroll"
      style={{
        maskImage: "linear-gradient(to bottom, #0005 50%, #000 50%)",
        maskSize: "100% 2px",
        width: '100%'
      }}
    >
      <main className="max-w-7xl mx-auto px-4 relative min-h-screen" style={{ height: "100vh" }}>
        <div className="flex flex-col items-center pt-8 pb-10 md:pt-8">
          <div className="mb-10">
            <HyperText />
          </div>
          
          <ScrollTo setActiveSection={handleClick} />
          
          <div className="w-full flex justify-between md:justify-around py-8">
            {["#home", "#stats", "#contact"].map((section) => (
              <a
                key={section}
                href={section}
                className="no-underline"
                onClick={() => handleClick(section)}
              >
                <div
                  className={`flex items-center justify-center border-2 border-primary p-4 ${
                    activeSection === section ? "bg-primary" : "hover:bg-primary hover:text-tertiary group"
                  } transition duration-300 ease-in`}
                  style={{ height: 10 }}
                >
                  <button
                    className={`text-primary text-shadow-custom font-vt323 text-center text-md md:text-[22px] hover:text-tertiary ${
                      activeSection === section ? "text-tertiary" : "text-primary"
                    }`}
                  >
                    {section === "#home" ? "Home" : section === "#stats" ? "Stats" : "Links"}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>

        <section id="home" className="w-full">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-evenly md:items-start">
            <div className="border-4 border-primary w-fit">
              <ImageComp />
            </div>
            
            <div className="w-full md:w-[500px] border-2 border-primary p-2">
              <WordFadeIn />
            </div>
            
            <div className="w-full md:w-auto border-2 border-primary p-4">
              <ProgressBar />
            </div>
          </div>
        </section>

        <section id="stats" className="w-full pt-8">
          <StatSide />
        </section>

        <section id="contact" className="w-full pt-8">
          <Contact />
        </section>
      </main>
    </div>
  );
}