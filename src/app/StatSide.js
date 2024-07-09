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
            name: 'Django',
            level: 'Intermediate',
            description: 'Developed backend systems using Django, integrated with Django-Celery and Django-Celery-Beats for task scheduling.'
        },
        {
            name: 'Front-End (HTML, CSS, JS)',
            level: 'Intermediate (Learning React)',
            description: 'Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript. Currently learning React.js.'
        },
        {
            name: 'Python',
            level: 'Advanced',
            description: 'Extensive experience in Python, including backend development.'
        },
        {
            name: 'C Language',
            level: 'Advanced',
            description: 'Developed system-level programs and algorithms using C.'
        },
        {
            name: 'Java',
            level: 'Intermediate',
            description: 'Developed applications using Java, focusing on object-oriented programming principles and application development.'
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
        <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: "5vw", marginLeft: "0vw" }}>
            <div style={{ paddingRight: "3vw" }}>
                <div className="md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24"
style={{fill:"#ffda47"}}>
<path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
</svg>
                    
                </div>
                <div className={`flex flex-row sm:flex md:flex-col ${menuOpen ? 'flex-col' : 'hidden'}`}>
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
            <div className="custom-scrollbar overflow-y-scroll" style={{ maxHeight: "60vh", position: 'relative', zIndex: '1' }}>
                <Cards skills={mainstr} category={activeCategory.toLocaleUpperCase()}></Cards>
            </div>
        </div>
    );
}
