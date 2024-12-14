import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md" id='resume'>
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mustapha Monsurat Adeola</h1>
        <div className="contact-info mt-2 text-gray-600">
         <Link to="/"><IoIosArrowBack className='text-3xl text-emerald-500'/> </Link>
          <p>Email: mustaphaadeola948@gmail.com</p>
          <p>Phone: 07015910621</p>
          <p>Address: 3kapoa, Alivide, Torikoh, Badagry, Lagos State</p>
          <div className='flex gap-5 items-center justify-center'>
          <a 
            href="https://github.com/stylesbyleilani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-600 hover:underline"
          >
            GitHub Profile
          </a>

          <a 
            href="https://mustapha-adeola-portfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-600 hover:underline"
          >
            My Potfolio
          </a>
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">Objective</h2>
        <p className="text-gray-700">
          Motivated Computer Science BSc graduate and Frontend Developer with expertise in JavaScript, React, and Node.js, seeking a challenging position to apply my diverse skills in a dynamic work environment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">Education</h2>
        <div>
          <p className="font-medium">BSc in Computer Science</p>
          <p className="text-gray-600">ESCT University Benin [2023]</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">Relevant Coursework</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Data Structures and Algorithms</li>
          <li>Web Development Fundamentals</li>
          <li>Database Management Systems</li>
          <li>System Programming</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Multitasking and Time Management</li>
          <li>Strong Problem-Solving Skills</li>
          <li>Quick Learning and Adaptability</li>
          <li>Excellent Communication</li>
          <li>Teamwork and Collaboration</li>
          <li>Positive Outlook and Learning Agility</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2  text-gray-900 border-gray-300 pb-2 mb-4">Projects</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Weather App</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Created a React-based Weather App fetching data from an API</li>
            <li>Displays temperature, humidity, pressure, and cloud imagery</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium tex-gray-700">Note App</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Designed optimal user interface for enhanced user experience</li>
            <li>Developed with React.js and implemented routing using React Router DOM</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700">Expense Tracker</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Created a JavaScript-based expense tracking application</li>
            <li>Implements local storage for data persistence</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">Work Experience</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-700">Teacher</h3>
          <p className="text-gray-600">July 2023 - October 2023</p>
          <p className="text-gray-700">Location: Lagos</p>
          <p className="text-gray-700">Prioritized strategies to develop responsible and independent learners</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">Technical Skills</h2>
        <div className="text-gray-700">
          <p><strong>Languages:</strong> JavaScript, HTML/CSS</p>
          <p><strong>Frameworks and Libraries:</strong> React,Tailwind css, Node.js, Material-UI, NextJs</p>
          <p><strong>Developer Tools:</strong> Git, VS Code, Postman</p>
          <p><strong>Software:</strong> Proficient in Microsoft Office</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Extracurricular Activities</h2>
        <p className="text-gray-700">
          Active member of the Computer Science Club, participating in coding competitions and collaborating with other developers on projects.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b-2 text-gray-900 border-gray-300 pb-2 mb-4">References</h2>
        <p className="text-gray-700">Available upon request</p>
      </section>
    </div>
  );
}

export default Resume;