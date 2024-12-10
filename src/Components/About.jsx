

import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";  
import { GrReactjs } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi"; 
import { SiExpress } from "react-icons/si";   
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si"; 
import { FaNpm } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";    
import { SiRedux } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";

import back from "../assets/back.jpg"; 

const About = () => {
  return (
    <div 
    className="relative bg-neutral-900 flex mt-2 flex-col   h-screen bg-cover bg-center" 
  >
       <h1 className='text-gray-100 mt-2 text-center  lg:text-start font-serif text-3xl'>My stack</h1>
       <div className="stack m-5 font-serif mt-8 md:m-4">
        <h2 className="text-l text-gray-300">Languages:</h2>
         <div className="lang-container mt-2 flex gap-2">
         <div className="js text-l rounded-sm border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <FaJs className="text-yellow-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">JavaScript</p>
          </div>
          
             </div>

             <h2 className="text-l mt-2 text-gray-300">Frameworks:</h2>
         <div className="lang-container flex-wrap  mt-2 flex gap-2">
         <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <GrReactjs className="text-blue-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">React</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <RiNextjsFill className="text-gray-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Next.js</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <FaNodeJs className="text-green-500 bg-black border-none text-2xl"/>
            <p className="text-gray-300">NodeJs</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <SiExpress className="text-gray-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Express</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <BiLogoTailwindCss className="text-cyan-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Tailwind</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <SiRedux className="text-purple-700 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Redux</p>
          </div>
             </div>
             <h2 className="text-l mt-2 text-gray-300">Databases:</h2>
         <div className="lang-container mt-2 flex gap-2">
         <div className="js text-l rounded-sm border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <DiMongodb className="text-green-500 bg-black border-none text-2xl"/>
            <p className="text-gray-300">MongoDB</p>
          </div>
             </div>
             <h2 className="text-x mt-2 text-gray-300">Tools:</h2>
         <div className="lang-container flex-wrap  mt-2 flex gap-2">
         <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <FaGitAlt className="text-orange-500 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Git</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <SiPostman className="text-orange-500 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Postman</p>
          </div>
          <div className="js  rounded-sm text-l border-[1px] border-gray-300 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <FaNpm className="text-red-500 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Npm</p>
          </div>
        
             </div>
             <h2 className="text-l mt-2 text-gray-300">Others:</h2>
         <div className="lang-container mt-2 flex gap-2">
         <div className="js text-l rounded-sm border-[1px] border-gray-200 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <IoLogoHtml5 className="text-orange-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Html</p>
          </div>
          <div className="js text-l rounded-sm border-[1px] border-gray-200 size-max p-1 font-bold justify-center gap-2 flex items-center "  >
             <FaCss3Alt className="text-yellow-300 bg-black border-none text-2xl"/>
            <p className="text-gray-300">Css</p>
          </div>
             </div>

        
        
        </div>
        {/* <h1 className='text-gray-300 mt-7 text-center  font-serif text-3xl'>More about me</h1>
       <div className="about-me m-6 md:m-10  md:whitespace-nowrap md:p-6 p-2 font-serif text-gray-300">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic ut quas fuga odio praesentium asperiores, </p>
        <p>exercitationem, non dolor perspiciatis deserunt voluptates nostrum temporibus ducimus illo dolo</p>
       </div> */}
    </div>
  

    

        
        
  
  )

}

export default About
