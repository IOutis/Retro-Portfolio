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
      className="dark max-w-full container old-crt-monitor retro-text font-vt323 w-screen h-full overflow-y-scroll overflow-x-hidden custom-scrollbar md:overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, #0005 50%, #000 50%)",
        maskSize: "100% 2px",
        width:'100%'
      }}
    >
      <main
        className="max-w-7xl mx-auto px-4 pr-4 relative min-h-screen "
        style={{ paddingTop: "-10vh", margin: "auto", width: "100vw", height: "100vh" }}
      >
        <div
          style={{
            height: "5vh",
            marginTop: "5vh",
            position: "relative",
            top: "3vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10vh",
            maxWidth: "100vw",
        
          }}
        >
          <HyperText  />
        </div>
        <ScrollTo setActiveSection={handleClick} />
        <br />
        <div
          className="retro-text flex justify-between md:justify-around md:pl-[0vw] w-full"
          style={{ paddingTop: "3vh", paddingBottom: "6vh", }}
        >
          {["#home", "#stats", "#contact"].map((section) => (
            <a
              key={section}
              href={section}
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(section)}
            >
              <div
                className={`flex items-center justify-center border-2 border-primary p-4  ${
                  activeSection === section ? "bg-primary" : "hover:bg-primary hover:text-tertiary group"
                } transition duration-300 ease-in`}
                style={{ height: 10 }}
              >
                <button
                  className={`text-primary text-shadow-custom font-vt323 text-center  text-md md:text-[22px] hover:text-tertiary ${
                    activeSection === section ? "text-tertiary" : "text-primary"
                  }`}
                >
                  {section === "#home" ? "Home" : section === "#stats" ? "Stats" : "Links"}
                </button>
                {activeSection === "selection" }
              </div>
            </a>
          ))}
        </div>

        <section
          id="home"
          className="flex justify-stretch w-fit h-fit md:w-full md:h-fit md:overflow-hidden overflow-y-scroll custom-scrollbar overflow-x-hidden"
        >
          
            <div className="flex flex-col md:flex-row justify-evenly">
              <div className="border-4 border-primary w-fit h-fit ">
                <ImageComp />
              </div>
              <div className="md:w-[500px] border-2 border-primary p-2">
                <WordFadeIn />
              </div>
              <div className="p-4 border-primary border-2 " >
                <ProgressBar />
              </div>
            </div>
         
        </section>

        <section id="stats" className="section" style={{ marginLeft: "0vw" }}>
          <StatSide />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}
