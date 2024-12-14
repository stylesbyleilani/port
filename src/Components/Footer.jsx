



import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className='relative mt-8 font-serif text-gray-300 bg-neutral-800 mx-auto px-4 sm:px-6 md:px-16 lg:px-24' id=''>
      <div className="pooter-content flex flex-col md:flex-row gap-4 md:justify-between p-2 md:p-7 items-center">
        
        <div className="pooter-content-left text-center md:text-left">
          <h3>Mustapha_adeola</h3>
          <div className="pooter-social-icons flex justify-center md:justify-start gap-2 md:gap-5 mt-2">
            <FaFacebookSquare/>
            <FaTwitter/>
            <FaLinkedin/>
          </div>
        </div>
        
        <div className="pooter-content-center text-center md:text-left" id='pooter'>
          <h2 className="text-lg font-bold mb-2">MUSTAPHA ADEOLA</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>
        
        <div className="pooter-content-right text-center md:text-left">
          <h2 className="text-lg font-bold mb-2">GET IN TOUCH</h2>
          <ul className="space-y-1">
            <li>07015910621</li>
            <li>mustaphaadeola948@gmail.com</li>
          </ul>
        </div>
        
      </div>
      
      <div className="text-center mt-4">
        <hr className="border-emerald-900" />
        <p className="pooter-copyright mt-4">
          © 2024 mustapah adeola. All Rights Reserved.
        </p> 
      </div>
      
    </div>
  )
}

export default Footer
