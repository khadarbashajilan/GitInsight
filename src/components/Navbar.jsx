import React from 'react'
import logo from '../assets/github-mark-white.png'
// import hamburger from '../assets/hamburger.png'
const Navbar = () => {
  return (
    <div className='bg-[#010409] text-white  backdrop-blur-2xl shadow-2xl  w-full md:p-3 p-2'>
      <div className='flex items-center md:gap-3 gap-2 px-2'>
        {/* <img src={hamburger}   alt="Logo" className='h-8 w-8 md:h-9 md:w-9' /> */}
        <img src={logo} className='h-8 w-8 md:h-9 md:w-9' />
        <h1 className='text-sm md:text-xl'>GithubInsight</h1>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar
