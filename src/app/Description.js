"use client"
import React from "react";
import Typed from 'typed.js'

// Import the desired words
class Description extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "Name:\nMd. Mushtaq\n\nCurrent Qualification:\nB.E. II Year I.T.\n\nBrief:\nPassionate and driven, I am always on the lookout for new challenges and opportunities to turn my innovative ideas into impactful projects. With an insatiable curiosity and a dedication to continuous learning, I am eager to apply my knowledge and skills to make a difference. Let's create something extraordinary together!\n",
      ],
      typeSpeed: 10,
      backSpeed: 0, // Prevents deletion of typed characters
      loop: false,
      cursorChar: "|",
      showCursor: false,
    };
    
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span className="font-vt323 retro-text"
          style={{ whiteSpace: "pre-wrap" ,color: "#ffd52c", fontSize:"20px",}}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Description;