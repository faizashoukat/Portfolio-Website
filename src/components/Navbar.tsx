import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='container pt-5'>
        <div className='flex justify-between items-center '></div>
       <div className='text-2xl font-bold pl-4'>Faiza Shoukat</div>
        <ul className='gap-10 lg:gap-16 pr-9 flex justify-end text-2xl '>
            <li className='menuLink'><a href='#hero'><b>Home</b></a></li>
            <li className='menuLink'><a href='#about'><b>About</b></a></li>
            <li className='menuLink'><a href='#skills'><b>Skills</b></a></li>
            <li className='menuLink'><a href='#projects'><b>Projects</b></a></li>
            <li className='menuLink'><a href='#contact'><b>Contact</b></a></li>

        </ul>
        <IoMenuSharp className='md:hidden' size={30} />
    </div>
  )
}

export default Navbar
