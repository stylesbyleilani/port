




import React from 'react';
import me from "../assets/me1.jpg";
import About from './About';
import { Link } from 'react-router-dom';

const More = () => {
  return (
    <div className="bg-neutral-900 p-4 sm:p-10" id='about'>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-sm text-emerald-500 mb-2">My Bio</h2>
          <h1 className="font-semibold font-serif text-2xl md:text-3xl text-gray-50">
            About me
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <div className="border rounded-full border-green-500 ">
              <img 
                src={me} 
                alt="Profile" 
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center md:text-left max-w-md">
            <p className="text-gray-300 mb-6">
            Frontend Developer | 2+ Years Experience | Lagos, Nigeria
Dedicated React developer specializing in crafting responsive, clean, and user-friendly web experiences. Computer Science graduate from Esct University Benin with a passion for creating intuitive digital interfaces.

            </p>
            <Link to="/resume" >    <button className="bg-emerald-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors">
              View Resume
            </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Technical Skills */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="font-semibold font-serif text-2xl text-gray-50 mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-300">
I'm focused on HTML5, CSS3, JavaScript, React and NextJs. I specialize in building websites that are pixels perfect , convert well and are well-designed. Whether you need a simple Landing Page, a complex Web Application using processes and code that is clean, reusable, responsive, user friendly and easy to maintain. I have the skills and knowledge to bring your vision to life and make you standout in the sea of sameness. Driven by a restless ambition to create inspiring work, push ideas and deliver beyond expectations

            </p>
          </div>

          <About />
        </div>
      </div>
    </div>
  );
}

export default More;