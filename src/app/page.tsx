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

export default function Home() {
  const [activeSection, setActiveSection] = useState("#home");

  const handleClick = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div
      className="container old-crt-monitor retro-text font-vt323 h-full overflow-y-scroll overflow-x-hidden custom-scrollbar md:overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, #0005 50%, #000 50%)",
        maskSize: "100% 2px",
      }}
    >
      <main
        className="max-w-[1000px] mx-auto px-4 sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%]"
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
          <Typing />
        </div>
        <ScrollTo setActiveSection={handleClick} />
        <br />
        <div
          className="retro-text flex justify-between md:justify-between md:pl-[0vw] "
          style={{ width: "75vw", paddingTop: "3vh", paddingBottom: "6vh", paddingLeft: "10vw" }}
        >
          {["#home", "#stats", "#contact"].map((section) => (
            <a
              key={section}
              href={section}
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(section)}
            >
              <div
                className={`flex items-center justify-center border-2 border-primary p-4 ${
                  activeSection === section ? "bg-primary" : "hover:bg-primary group"
                } transition duration-300 ease-in`}
                style={{ height: 10 }}
              >
                <button
                  className={`text-primary text-shadow-custom font-vt323 text-center  text-md md:text-[22px] ${
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
          className="flex justify-stretch w-fit h-fit md:w-fit md:h-fit md:overflow-hidden overflow-y-scroll custom-scrollbar overflow-x-hidden"
        >
          <div>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="border-4 border-primary w-fit h-fit ml-[3vw] mr-[4vw]">
                <ImageComp />
              </div>
              <div className="w-fit pr-[0vw] pl-[3vw] pt-[4vh] md:w-[40vw] md:pt-[0vh] md:pl-[0vw]">
                <Description />
              </div>
              <div className="pt-[4vh] md:pt-[0vh] mr-[10vw]" style={{ marginLeft: "3vw", marginRight: "1vw" }}>
                <ProgressBar />
              </div>
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
