import React from "react";
import logo from "../assets/github-mark-white.svg";
// import hamburger from '../assets/hamburger.png'
const Navbar = () => {
  return (
    <div className=" backdrop-blur-xl shadow-xl fixed w-full md:p-3 p-2">
      <div className="flex items-center md:gap-3 gap-2 px-2">
        {/* <img src={hamburger}   alt="Logo" className='h-8 w-8 md:h-9 md:w-9' /> */}
        <img src={logo} className="h-8 w-8 md:h-9 md:w-9" />
        <h1 className="text-sm md:text-xl">GithubInsight</h1>
      </div>
    </div>
  );
};

export default Navbar;
