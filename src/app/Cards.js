import React, { useState } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-6 max-w-lg w-full mx-4 relative border-primary border-2">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-md shadow-md"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="p-4 bg-background rounded-lg shadow-md cursor-pointer hover:shadow-lg transition ease-in-out hover:scale-125 duration-300 border-primary border-2"
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="font-bold text-md text-primary mb-2">{skill.name}</h3>
  
        {skill.level && <p className="text-primary">Level: {skill.level}</p>}
        <p>Click here</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4">
          <h2 className="sm:text-md md:text-lg font-bold">{skill.name}</h2>
          {skill.level && <p className="text-primary">Level: {skill.level}</p>}
          <div className="mt-4">
            <p className="text-primary">{skill.description}</p>
          </div>
          {skill.githubLink && (
            <a 
              href={skill.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-primary block mt-2"
            >
              GitHub Link
            </a>
          )}
          {skill.cgpa && <p className="text-primary mt-2">{skill.cgpa}</p>}
        </div>
      </Modal>
    </>
  );
};

const Cards = ({ skills = [], category }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{category}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Cards;




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
