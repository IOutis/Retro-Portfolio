"use client"
import React,{useState} from 'react'
import StatsComp from './StatsComp'
export default function StatSide() {
    const strength = `<h2>Strengths:</h2>
<li><strong>Adaptive Thinker</strong> - I quickly adjust my strategies based on changing environments and data, ensuring continuous alignment with goals.</li>
<li><strong>Strategic Foresight</strong> - I anticipate future trends and align my actions accordingly, ensuring long-term success.</li>
<li><strong>Iterative Experimenter</strong> - I continuously test, refine, and improve ideas and processes through iterative experimentation.</li>
<li><strong>Pattern Recognition</strong> - I identify underlying patterns and connections in data and experiences, uncovering valuable insights.</li>
<li><strong>Narrative Builder</strong> - I craft compelling stories that effectively communicate complex ideas, engaging and informing my audience.</li>

`;

    const [mainstr,setMainstr] = useState(strength);
    const skills = `<h2>Skills:</h2>  
1. Django
    <strong>Proficiency Level:</strong> Intermediate
    <strong>Relevant Experience:</strong> Developed backend systems using Django, integrated with Django-Celery and Django-Celery-Beats for task scheduling.
    <strong>Skills Used:</strong> Django, Django-Celery, Django-Celery-Beats

2. Front-End (HTML, CSS, JS)
    <strong>Proficiency Level:</strong> Intermediate (Learning React)
    <strong>Relevant Experience:</strong> Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript. Currently learning React.js.
    <strong>Skills Used:</strong> HTML, CSS, JavaScript

3. Python
    <strong>Proficiency Level:</strong> Advanced
    <strong>Relevant Experience:</strong> Extensive experience in Python, including backend development.
    <strong>Skills Used:</strong> Python

4. C Language
    <strong>Proficiency Level:</strong> Advanced
    <strong>Relevant Experience:</strong> Developed system-level programs and algorithms using C.
    <strong>Skills Used:</strong> C Language

5. Java
    <strong>Proficiency Level:</strong> Intermediate
    <strong>Relevant Experience:</strong> Developed applications using Java, focusing on object-oriented programming principles and application development.
    <strong>Skills Used:</strong> Java
`;


   

   const projects = `<strong>Projects</strong>:
1. <a href="https://github.com/IOutis/Learners-Edge" target="_blank"><em>Student Synergy</em></a>: A website designed to enhance student productivity. Built using Django for the backend, with Django Celery and Django Celery Beats for notifications.
   <a href="https://github.com/IOutis/Learners-Edge" target="_blank">View on GitHub 👈</a>

2. <a href="https://github.com/IOutis/Gemini_chabot_react" target="_blank"><em>Chatbot</em></a>: A React project utilizing the Gemini API for creating interactive chatbots.
   <a href="https://github.com/IOutis/Gemini_chabot_react" target="_blank">View on GitHub 👈</a>

3. <a href="https://github.com/IOutis/Crime-Case-Management" target="_blank"><em>Crime Case Management System</em></a>: A straightforward system for managing crime cases, developed using Java Swing and connected to MySQL.
   <a href="https://github.com/IOutis/Crime-Case-Management" target="_blank">View on GitHub 👈</a>

4. <a href="https://github.com/Yash5588/Vocal-Language-Translator" target="_blank"><em>Vocal Language Translator</em></a>: Contributed to a group project developing a language translator supporting over 100 languages. Implemented speech recognition for input.
   <a href="https://github.com/Yash5588/Vocal-Language-Translator" target="_blank">View on GitHub 👈</a>   `


   
    const edu = `<strong><h3>Education:</h3></strong>
<h4>Bachelor of Engineering</h4>
<p>Currently pursuing my second year in Information Technology at Vasavi College of Engineering. CGPA:8.7</p>
<strong><h4>Intermediate</h4></strong>
<p>Completed Intermediate education at Iqbalia Junior College with 96.7%</p>
<strong><h4>Secondary School Education</h4></strong>
<p>Completed schooling at Kakatiya Vidya Niketan High School with a 10 GPA.</p>\n`
    const passString=(a)=>{
        if (a === "strengths"){
            setMainstr(strength);
            console.log("In strengths;")
        }
        else if (a==="skills"){
            setMainstr(skills)
        }
        else if (a==="Projects"){
            setMainstr(projects);
        }
        else if (a==="edu"){
            setMainstr(edu);
            }
    }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', paddingLeft:"5vw", marginLeft:"0vw", }}>
        <div style={{paddingRight:"3vw"}}>
            <div className="flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" onClick={()=>passString("strengths")}>
                <button  className="retro-text text-primary font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize:"22px"}}> Strengths</button>
            </div>

            <div className="flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" onClick={()=>passString("skills")}>
                <button  className="retro-text text-primary font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize:"22px"}}> Skills</button>
            </div>
            <div className="flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" onClick={()=>passString("Projects")}>
                <button   className="retro-text text-primary font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize:"22px"}}> Projects</button>
            </div>
            <div className="flex items-center justify-center border-2 border-primary p-4 hover:bg-primary group transition duration-300 ease-in" onClick={()=>passString("edu")}>
                <button   className="retro-text text-primary font-vt323 text-center group-hover:text-black group-hover:text-lg" style={{fontSize:"22px"}}> Education</button>
            </div>
        </div>
      <div className="custom-scrollbar overflow-y-scroll" style={{maxHeight:"60vh"}}><StatsComp key={mainstr} strings={[mainstr]} /></div>
      
    </div>
  )
}
