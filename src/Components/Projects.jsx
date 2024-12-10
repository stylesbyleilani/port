




import React from 'react';
import { project } from '../constants/contant';

const ProjectCard = ({ img, caption, description, stack, link }) => {
  return (
    <div className="    bg-[#144045]/90 border border-gray-200/10 rounded-md overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={img} 
          alt={caption} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-200">{caption}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{stack}</span>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-400 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div 
      className="bg-gray-900 py-16 px-9 sm:px-8 md:px-16 lg:px-24" 
      id="project"
    >
      <div className="text-center mb-12">
        <span className="bg-neutral-900 text-emerald-500 rounded-full px-3 py-1 text-sm uppercase">
          Projects
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-3 font-serif text-gray-300 tracking-wide">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map((projectItem, index) => (
          <ProjectCard 
            key={index}
            {...projectItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
