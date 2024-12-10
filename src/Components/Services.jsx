

import React from 'react';
import { 
  CloudLightning, 
  ArrowUpRight, 
  Box, 
  LineChart, 
  Wrench,
  BarChart3
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className={`
    group p-6 rounded-lg backdrop-blur-sm transition-all duration-300
    bg-[#144045]/90 hover:bg-[#144045]/95
    hover:transform hover:-translate-y-1 hover:shadow-xl
    border border-gray-200/10
  `}>
    <div className="flex justify-between items-center mb-4">
      <Icon className="w-6 h-6 text-gray-200" />
      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
    </div>
    
    <h2 className="font-semibold text-lg text-gray-200 mb-2">
      {title}
    </h2> 
    
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Services = () => {
  const services = [
    // {
    //   icon: CloudLightning,
    //   title: " Web development",
    //   description: "Details on production processes, assembly, capacity and product type"
    // },
    {
      icon: Wrench,
      title: "Cross-Browser Compatibility",
      description: "I ensure that applicaion function consistently across different browser by testing and applying appropraite css and javascript fixes, adhering to web standards to avoid browser-specific issues"
    },
    // {
    //   icon: Box,
    //   title: "Component-Based Architecture",
    //   description: "I use component-based frameworks like React to build reuseable, modular components. This approach improves code maintainability,scalability and reduces duplication, making development more efficient."
    // },
    {
      icon: LineChart,
      title: "Git version control",
      description: "I use version control system like Git to mannage code changes and collaborate effectively with other developers. This helps in tracking progress,resolving conflicts, and maintaing a clean code base "
    },
    {
      icon: BarChart3,
      title: "Responsive Design",
      description: "I implement responsive design principles to ensure that website and applications look and function well on all devices from desktop to mobile phones, providing seamless experience across different screens sizes"
    },
    {
      icon: CloudLightning,
      title: "Performance Optimization",
      description: "I optimize the performace of the website by minimizing load times, reducing HTTP requests, and use efficient coding practices.This inclues image optimization,lazy loading,and code splitting to ensure fast and smooth user interactions"
    },
    {
      icon: BarChart3,
      title: "Code Quality and Best Practices",
      description: "I write clean, maintainable code by following best practices,such as adhering to coding standards, commenting code when necessary,and using linters and formaters. This ensure the code is easy to read,understand and maintain"
    },
    {    
      icon: BarChart3,
      title: "Collaboration and Communicaion",
      description: "I actively collaborate with designers, back-end developers, and stakeholders to ensure alignment on project goals.Clear communication helps in understanding requirements,addresing concerns early, and delivering a product that meets or exceeds expectation  "
    },
    // {    
    //   icon: BarChart3,
    //   title: "User-Centered Design",
    //   description: "I work with designers to prioritize the user experience by focusing on usability,accessibility, and intuitive navigation, ensuring that the interface is easy to use and meets the need of the target audience.  " 
    // },  
    
  ];

  return (
    <div className="bg-neutral-900  lg:mt-0 min-h-screen" id='service'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className='uppercase text-emerald-500 text-sm'>Servicies</h1>
          <h1 className="font-semibold text-2xl md:text-3xl text-gray-50 mb-4">
            <span className="block">What i do</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Simple operations with our efficient quality-focused services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;