import React from "react";
import logo from "../assets/github-mark-white.svg";
// import hamburger from '../assets/hamburger.png'
const Navbar = () => {
  return (
    <nav>
      <div>
        {/* <img src={hamburger}   alt="Logo" className='h-8 w-8 md:h-9 md:w-9' /> */}
        <img src={logo}/>
        <h1>GithubInsight</h1>
      </div>
    </nav>
  );
};

export default Navbar;
