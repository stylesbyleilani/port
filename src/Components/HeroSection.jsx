




import React from 'react';
import { TwitterIcon, MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { BsTwitterX } from "react-icons/bs";

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="rounded-full text-black bg-white p-3 hover:bg-emerald-500 hover:text-gray-100 transition-colors duration-300 flex items-center justify-center"
  >
    <Icon size={24} />
  </a>
);

const Hero = () => {
  const socialLinks = [
    { Icon: MailIcon, href: "mustaphaadeola948@gmail.com" },
    { Icon: FaWhatsapp, href: "https://wa.me/07015910621" },
    { Icon: BsTwitterX, href: "https://twitter.com/Adeola687" },
    { Icon: GithubIcon, href: "https://github.com/stylesbyleilani" }
  ];

  return (
    <div className="relative font-serif flex items-center justify-center h-screen bg-neutral-950 overflow-hidden" id='home'>
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-gray-50 mb-6">
          Hello there,
         I'm{' '}
          <span className="bg-emerald-500 bold text-transparent bg-clip-text">
            <Typewriter
              words={['Mustapha Adeola']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
          
        </h1>

        <p className="text-lg text-gray-50 max-w-3xl mx-auto mb-10 px-4">
          A seasoned  <span className='text-emerald-500 font-semibold '> Web & Mobile </span>  Frontend Developer with  <span className='text-emerald-500'>2 years +</span> experience transforming ideas into stunning digital experiences. Skilled in  building  high converting, beautiful and functional user interfaces.
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map(({ Icon, href }, index) => (
            <SocialIcon key={index} Icon={Icon} href={href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;