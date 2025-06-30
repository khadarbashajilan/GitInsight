import React from 'react'
import logo from '../assets/github-mark-white.png'
import hamburger from '../assets/hamburger.png'
const Navbar = () => {
  return (
    <div className='bg-black  w-full p-3 text-white'>
      <div className='flex items-center gap-3'>
        <img src={hamburger} height={"35px"} width={"35px"} alt="" />
        <img height={"35px"} width={"35px"}  src={logo} />
        <h1>GithubInsight</h1>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar
