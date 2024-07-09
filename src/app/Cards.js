import React from 'react';

export default function Cards({ skills = [], category }) {
  return (
    <div className="cards-container">
      <div className="category-heading">
        <h2 className='text-lg'>{category}</h2>
      </div>
      <div className="cards-list grid grid-flow-row md:grid-flow-col">
        {skills.map((skill, index) => (
          <div className="card text-sm md:text-base" key={index}>
            <details>
              <summary><strong><h1>{skill.name}</h1></strong><br />
              {skill.level ? <p>Level : {skill.level}</p> : null}
              Read More...<br />
              </summary>
              <p>Description: {skill.description}</p>
              {skill.githubLink ? <a href={skill.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a> : null}
              {skill.cgpa ? <p>{skill.cgpa}</p> : null}
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}





// export default function Cards({ skills = [] }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div className="grid gap-4 grid-flow-row auto-rows-max" style={{marginTop:"3vh",marginLeft:"3vw",marginRight:"3vw",marginBottom:"3vh"}}>
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={() => handleMouseLeave()}
//           className={`relative max-w-sm p-6 bg-tertiary border border-tertiary rounded-lg shadow dark:bg-gray-800 cursor-pointer transition-all duration-300 ease-in-out`}
//           style={{ maxWidth: '20vw', transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' }}
//         >
//           <div className="group re">
//             <div
//               className="font-bold text-2xl text-gray-900 dark:text-primary mb-2 cursor-pointer"
//               style={{
//                 outline: 'none',
//                 transition: 'all 0.3s ease-in-out',
//               }}
//             >
//               <h5>{skill.name}</h5>
//               <p className="font-normal text-gray-700 dark:text-primary">
//                 Level: {skill.level}
//               </p>
//             </div>
//             <div
//               className={`absolute inset-0 bg-tertiary dark:bg-gray-800 p-6 rounded-lg shadow transition-opacity duration-300 ease-in-out ${
//                 hoveredIndex === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
//               }`}
//               style={{
//                 zIndex:hoveredIndex===index?10:0,
//               }}
//             >
//               <p className="font-vt323">
//                 {skill.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
