import React from 'react'
import {CiSearch} from "react-icons/ci"
import { PiCamera} from "react-icons/pi"
import {GrMicrophone} from "react-icons/gr"
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className = ' fixed top-0 left-[var(--sidebar-width)]  w-[calc(100%-var(--sidebar-width))] h-18 flex justify-center items-center'>
        
        <div className = 'active:border-blue-400 active:border-2 flex items-center justify-start w-[90%] h-10  p-6 bg-gray-100 hover:bg-gray-200 rounded-2xl mx-4'>
            
            <CiSearch className='text-gray-400 text-3xl mr-2'/>
            <input type="text" placeholder='Search' className='w-full outline-0'/>
            
            <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center hover:bg-white rounded-2xl p-2 cursor-pointer'>

                <PiCamera className = "text-2xl"/>
            </div>
             <div className='flex items-center hover:bg-white rounded-2xl p-2 cursor-pointer'>
            <GrMicrophone/>
            </div>
            </div>
            
        </div>
        <div className='flex w-20 items-center  gap-2  p-2'>
          <div className='w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center cursor-pointer'>
            A
          </div>
          <RiArrowDropDownLine className='2xl' />
        </div>
      
    </div>
  )
}

export default Navbar
