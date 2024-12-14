"use client"
import React, { useState } from 'react';
import StatsComp from './StatsComp';
import Cards from './Cards';

export default function StatSide() {
    const strength = [
        {
            name: 'Adaptive Thinker',
            description: 'I quickly adjust my strategies based on changing environments and data, ensuring continuous alignment with goals.'
        },
        {
            name: 'Strategic Foresight',
            description: 'I anticipate future trends and align my actions accordingly, ensuring long-term success.'
        },
        {
            name: 'Iterative Experimenter',
            description: 'I continuously test, refine, and improve ideas and processes through iterative experimentation.'
        },
        {
            name: 'Pattern Recognition',
            description: 'I identify underlying patterns and connections in data and experiences, uncovering valuable insights.'
        },
        {
            name: 'Narrative Builder',
            description: 'I craft compelling stories that effectively communicate complex ideas, engaging and informing my audience.'
        }
    ];

    const skillsData = [
        {
            name: 'Python',
            level: 'Intermediate',
            description: 'Proficient in Python backend development and data processing. Strong focus on writing efficient, maintainable code using modern Python features.'
        },
        {
            name: 'Frontend Development',
            level: 'Intermediate',
            description: 'Proficient in creating responsive web interfaces using HTML5, CSS3, and JavaScript. Experience with modern CSS frameworks including Tailwind CSS and Bootstrap.'
        },
        {
            name: 'React & Next.js',
            level: 'Intermediate',
            description: 'Building dynamic web applications using React ecosystem, including state management, hooks, and server-side rendering with Next.js.'
        },
        {
            name: 'C/C++',
            level: 'Intermediate',
            description: 'Strong foundation in system programming, data structures, and algorithm implementation using C/C++. Experience in performance optimization.'
        },
        {
            name: 'Java',
            level: 'Intermediate',
            description: 'Experienced in OOP principles and Java application development, including multithreading and design patterns.'
        },
        {
            name: 'Django',
            level: 'Intermediate',
            description: 'Building scalable web applications with Django, including REST APIs, authentication systems, and task scheduling with Celery.'
        },
        {
            name: 'Node.js',
            level: 'Intermediate',
            description: 'Developing server-side applications and APIs using Node.js ecosystem, with focus on Express.js and async programming.'
        },
        {
            name: 'Databases',
            level: 'Intermediate',
            description: 'Proficient in both SQL (MySQL) and NoSQL (MongoDB) databases, including schema design, optimization, and data modeling.'
        },
        {
            name: 'Machine Learning',
            level: 'Basic',
            description: 'Experience in developing and deploying ML models using popular frameworks, with focus on practical applications and model optimization.'
        }
    ];
    const projects = [
        {
            name: 'Student Synergy',
            description: 'A website designed to enhance student productivity. Built using Django for the backend, with Django Celery and Django Celery Beats for notifications.',
            githubLink: 'https://github.com/IOutis/Learners-Edge'
        },
        {
            name: 'Chatbot',
            description: 'A React project utilizing the Gemini API for creating interactive chatbots.',
            githubLink: 'https://github.com/IOutis/Gemini_chabot_react'
        },
        {
            name: 'Crime Case Management System',
            description: 'A straightforward system for managing crime cases, developed using Java Swing and connected to MySQL.',
            githubLink: 'https://github.com/IOutis/Crime-Case-Management'
        },
        {
            name: 'Vocal Language Translator',
            description: 'Contributed to a group project developing a language translator supporting over 100 languages. Implemented speech recognition for input.',
            githubLink: 'https://github.com/Yash5588/Vocal-Language-Translator'
        }
    ];

    const education = [
        {
            name: 'Bachelor of Engineering',
            description: 'Currently pursuing my second year in Information Technology at Vasavi College of Engineering.',
            cgpa: 'CGPA : 8.7',
        },
        {
            name: 'Intermediate',
            description: 'Completed Intermediate education at Iqbalia Junior College with 96.7%',
            cgpa: 'Percentage : 96.7',
        },
        {
            name: 'Secondary School Education',
            description: 'Completed schooling at Kakatiya Vidya Niketan High School with a 10 GPA.',
            cgpa: 'CGPA : 10',
        }
    ];

    const [mainstr, setMainstr] = useState(strength);
    const [activeCategory, setActiveCategory] = useState('strengths');
    const [menuOpen, setMenuOpen] = useState(false);

    const passString = (category) => {
        setActiveCategory(category);
        setMenuOpen(false)
        if (category === "strengths") {
            setMainstr(strength);
        } else if (category === "skills") {
            setMainstr(skillsData);
        } else if (category === "Projects") {
            setMainstr(projects);
        } else if (category === "education") {
            setMainstr(education);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getButtonClasses = (category) => {
        const baseClasses = "border-2 border-primary p-4 group transition duration-300 ease-in cursor-pointer";
        const activeClasses = "text-black bg-primary";
        const hoverClasses = "hover:text-black hover:bg-primary";
        return activeCategory === category ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${hoverClasses}`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: "5vw", marginLeft: "1vw" }}>
            <div style={{ justifyContent:'space-around'}}>
                <div className="md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24"
                    style={{fill:"#ffda47"}}>
                    <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                    </svg>
                    
                </div>
                <div className={`flex flex-col sm:flex md:flex-col ${menuOpen ? 'flex-col' : 'hidden'} `}>
                    <div id='strengths' className={`flex items-center w-20 md:w-36 justify-center ${getButtonClasses("strengths")}`} onClick={() => passString("strengths")}>
                        <p className='text-sm md:text-xl'>Strengths</p>
                    </div>
                    <div id='skills' className={`flex items-center w-20 md:w-36 justify-center ${getButtonClasses("skills")}`} onClick={() => passString("skills")}>
                        <p className='text-sm md:text-xl'>Skills</p>
                    </div>
                    <div id='Projects' className={`flex items-center w-20 md:w-36 justify-center ${getButtonClasses("Projects")}`} onClick={() => passString("Projects")}>
                        <p className='text-sm md:text-xl'>Projects</p>
                    </div>
                    <div id='edu' className={`flex items-center w-20 md:w-36 justify-center ${getButtonClasses("education")}`} onClick={() => passString("education")}>
                        <p className='text-sm md:text-xl'>Education</p>
                    </div>
                </div>
            </div>
            <div className="" style={{ maxHeight: "60vh", position: 'relative', zIndex: '1' }}>
                <Cards skills={mainstr} category={activeCategory.toLocaleUpperCase()}></Cards>
            </div>
        </div>
    );
}
