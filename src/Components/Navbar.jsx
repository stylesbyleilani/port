
import React, { useState } from 'react' 
import react from "../assets/react.svg"
import ack from "../assets/me1.jpg"

import {Menu, X} from "lucide-react" 
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileOpen(!mobileOpen)
  }



  return (
     <nav className='sticky bg-neutral-950  text-gray-50 font-medium top-0 z-50 py-3 px-6 backdrop-blur-lg  '>
  <div className="container px-4 mx-auto relative text-sm ">
  <div className="flex justify-between items-center ">
  <div className='flex gap-2 items-center flex-shirnk-0'>
    <div className='border-[3px] border-emerald-500 rounded-full '><img src={ack} alt="" className='w-7 h-7 rounded-full' /></div>
    <span className='text-xl    text-emerald-500 tracking-tight'>mustapha_adeola</span>
  </div>
  <ul className='hidden lg:flex ml-14 space-x-12 font-bold'>
    <li className=' hover:text-emerald-500'><a href="#home">Home</a></li>
    <li className=' hover:text-emerald-500'><a href="#about">About</a></li>
    <li className=' hover:text-emerald-500'><a href="#service">Services</a></li>
    <li className=' hover:text-emerald-500'><a href="#project" >Projects</a></li>
    <li className=' hover:text-emerald-500'><a href="#contact">Contact</a></li>

  </ul>
  <Link to="/resume" > <div className="hidden lg:flex justify-center space-x-12 item-center">
    <a  className='font-bold border-none    bg-emerald-700 text-white rounded-md  py-2 px-2 border '> View Resume</a>
  </div>
  </Link>
<div className="lg:hidden md:flex flex-col justify-end">
  <button onClick={toggleNavbar}>
    {mobileOpen ? <X/> : <Menu className='text-emerald-600'/>}
  </button>
</div>
  </div >
  {mobileOpen && (
    <div className='  right z-20 text-gray-100 bg-gray-950 mt-1 w-full p-7 flex flex-col lg:hidden '>
  <ul>
   <li className='py-4 font-bold   hover:text-emerald-500 '><a href="#home">Home</a></li>
    <li className='py-4 font-bold   hover:text-emerald-500'><a href="#about">About</a></li>
    <li className='py-4 font-bold   hover:text-emerald-500'><a href="#service">Services</a></li>
    <li className='py-4 font-bold   hover:text-emerald-500'><a href="#project">Projects</a></li>
    <li className='py-4 font-bold   hover:text-emerald-500'><a href="#contact">Contact</a></li>
  </ul>
  <Link to="/resume" > <div className="flex space mt-2 x-6">
  <a className='font-bold bg-emerald-500  b py-3 px-3 border-none rounded-md  text-white'>View Resume</a>

  </div>
  </Link>
    </div>
  )}
  </div>

     </nav>
  )
}

export default Navbar
