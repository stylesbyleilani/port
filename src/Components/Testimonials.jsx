





import React from 'react';

import { IoStar } from "react-icons/io5";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className={`
    group p-6 rounded-lg backdrop-blur-sm transition-all duration-300
    bg-[#144045]/90 hover:bg-[#144045]/95
    hover:transform hover:-translate-y-1 hover:shadow-xl
    border border-gray-200/10
  `}>
    <p className="text-gray-100 text-sm leading-relaxed">
      {title}
    </p>
    
    
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>

        <div className="flex justify-between items-center mt-5">
      <div className='flex gap-1 items-center'>
      <IoStar className="w-5 h-5 text-yellow-400 group-hover:text-yellow-500 transition-colors" />
      <IoStar className="w-5 h-5 text-yellow-400 group-hover:text-yellow-500 transition-colors" />
      <IoStar className="w-5 h-5 text-yellow-400 group-hover:text-yellow-500 transition-colors" />
      <IoStar className="w-5 h-5 text-yellow-400 group-hover:text-yellow-500 transition-colors" />

      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const services = [


    {
      title: "Mrs odunuga",
      description: "Adeola is calm and a good lisener, she lisened and paid attention to details in the design of my supermarket website"
    },
    {
      title: "Mr Adetunji",
      description: "Working with adeola was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform.Higly recomend her for any web dev project "
    },
    {    
      title: "Mr yemen",
      description: "I can't say enough good things about Adeola. She highlighted the improvents that needs to be made and she was able to take our compplext project requirement and turn them into a seamless, functional website.Her problem-solving abilities is outstanding  "
    },

    
  ];

  return (
    <div className="bg-neutral-900  lg:mt-0 min-h-screen" id='service'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className='uppercase text-emerald-500 text-sm'>Testimonials</h1>
          <h1 className="font-semibold text-2xl md:text-3xl text-gray-50 mb-4">
            <span className="block">What clients are saying</span>
          </h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;