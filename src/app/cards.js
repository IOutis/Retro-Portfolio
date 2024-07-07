"use client"
import React, { useState, useRef, useEffect } from 'react';

export default function Cards({ skills = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const descriptionsRef = useRef([]);
  const cardRef = useRef([]);

  useEffect(() => {
    // Populate the descriptionsRef with the DOM nodes once they are available
    descriptionsRef.current = descriptionsRef.current.slice(0, skills.length).map(el => el || {});
    cardRef.current = cardRef.current.slice(0, skills.length).map(el => el || {});
  }, [skills]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`relative max-w-sm p-6 bg-tertiary border border-tertiary rounded-lg shadow dark:bg-gray-800 cursor-pointer transition-all duration-300 ease-in-out`}
          style={{ maxWidth: '20vw', transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' }}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-primary">
            {skill.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-primary">
            Level: {skill.level}
          </p>
          <div
            ref={(el) => (descriptionsRef.current[index] = el)}
            className={`expandable bg-tertiary border border-tertiary rounded-lg shadow dark:bg-gray-800 cursor-pointer`}
            style={{
              position: 'absolute',
              bottom:0,
              left: 0,
              right: 0,
              zIndex: '100 !important',
              transform: `translateY(${hoveredIndex === index ? '90%' : '0'})`,
              transition: 'transform 0.3s ease-in-out',
              opacity: hoveredIndex === index ? 1 : 0,
              padding: '6px',
            }}
          >
            <p className="opacity-100 transition-opacity duration-300 ease-in-out">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
