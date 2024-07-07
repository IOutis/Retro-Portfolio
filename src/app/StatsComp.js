"use client"
import React from 'react'

export default function StatsComp(props) {
  return (
    <div 
      className="font-vt323"
      style={{ whiteSpace: "pre-wrap", color: "#ffd52c", fontSize: "20px", justifyContent: "right", alignItems: "flex-end" }}
      dangerouslySetInnerHTML={{ __html: props.strings }} 
    />
  )
}

























// "use client"
// import React from 'react';
// import Typed from 'typed.js';

// class StatsComp extends React.Component {
//   componentDidMount() {
//     const options = {
//       strings: this.props.strings,
//       typeSpeed: 1,
//       backSpeed: 0, // Prevents deletion of typed characters
//       loop: false,
//       cursorChar: "|",
//       showCursor: false,
//     };

//     // this.el refers to the <span> in the render() method
//     this.typed = new Typed(this.el, options);
//   }

//   componentWillUnmount() {
//     // Please don't forget to cleanup animation layer
//     this.typed.destroy();
//   }

//   render() {
//     return (
//       <>
//         <span className="font-vt323"
//           style={{ whiteSpace: "pre-wrap", color: "#ffd52c", fontSize: "20px", justifyContent: "right", alignItems: "flex-end" }}
//           ref={(el) => {
//             this.el = el;
//           }}
//         />
//       </>
//     );
//   }
// }

// export default StatsComp;
