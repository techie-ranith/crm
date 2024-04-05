import React from 'react';

import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { LuHelpCircle } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const NavbarMenu = () => {
  return (
    <nav className='bg-white-800 px-6 py-4 flex justify-between ml-72 border-b border-gray'>
        <div className='flex items-center ml-8'>
            <span className="font-semibold text-4xl text-teal-800">Add User</span>
        </div>

        <div className='flex items-center gap-x-5 '>
            <div className='relative md:w-80 mr-36'>
              <span className='relative md:absolute left-0 flex items-center pl-2'>
                <button className='p-1 focus:outline-none '><FaSearch color='teal'/></button>
              </span>
              <span className='relative md:absolute right-0 flex items-center pl-2'>
                <button className='p-1 focus:outline-none text-green md:text-black'><IoMdArrowDropdown color='teal'/></button>
              </span>
              <input  className='w-full px-4 py-1 pl-12 rounded shadow outline-none md:black text-center' 
                 type="text"
                 placeholder='Quick Access'
              />
              <div>
              </div>
            </div>
              <div className='text-green mr-3 cursor-pointer'><FaRegEnvelope color='teal' className='w-6 h-6'/></div>
              <div className='text-green mr-3 cursor-pointer'><FaRegBell color='teal' className='w-6 h-6'/></div>
              <div className='text-green mr-3 cursor-pointer'><LuHelpCircle color='teal' className='w-6 h-6'/></div>
              <div className='mr-3 cursor-pointer'><FaUserCircle color='teal' className='w-20 h-20'/></div>
            
        </div>
    </nav>
  )
}

export default NavbarMenu