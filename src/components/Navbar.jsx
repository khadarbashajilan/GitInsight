import React from "react";
import logo from "../assets/github-mark-white.svg";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="logo" src={logo} />
        <h1>GithubInsight</h1>
      </div>
    </nav>
  );
};

export default Navbar;
