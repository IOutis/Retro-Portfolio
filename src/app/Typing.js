"use client";
import React from "react";
import Typed from 'typed.js';

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: ["Mushtaq", "a Web-Developer", "obsessed with making projects"],
      typeSpeed: 20,
      backSpeed: 10,
      loop: true,
      cursorChar: "|",
      showCursor: false,
      backDelay: 2000,
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
      <span className="font-vt323 retro-text" style={{ whiteSpace: "pre", color: "#ffd52c", fontSize: "x-large", display: "block", marginTop: "3rem" }}>
        Hi! I am{" "}
        <span
          ref={(el) => {
            this.el = el;
          }}
        />
      </span>
    );
  }
}

export default Typing;
