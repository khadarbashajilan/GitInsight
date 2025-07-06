
import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
// import logo from "../assets/github-mark-white.svg";
import { useNavigate } from 'react-router-dom'; // Keep this commented if not used

const Menubar = () => {
    const [toggle, settoggle] = useState(false);
    const navigate = useNavigate();

    const handleToggleMenu = () => {
        settoggle(prev => !prev);
    }

    const handleMenuItemClick = (path) => {
        settoggle(false); 
        navigate(path);
    }
    const handleOverlayClick = (e) => {
      console.log(e)
        if (e.target === e.currentTarget) {
            settoggle(false); 
        }
    };


    return (
        <>
            <nav>
                <div className="flex items-center space-x-2">
                    <img
                        src={toggle ? close : menu}
                        onClick={handleToggleMenu} // This toggles open/close
                        className='h-7 w-7 cursor-pointer md:h-9 md:w-9'
                        alt="Toggle Menu"
                    />
                    {/* <img src={logo} alt="Logo" className=" logo h-6 w-6" /> */}
                    <h1 className="text-xl font-bold">GithubInsight</h1>
                </div>
            </nav>

            {/* Only show menu when toggle is true */}
            {toggle && (
                <div
                    onClick={handleOverlayClick} // Use the new handler for the overlay
                    className='fixed inset-0 z-[1000] text-white bg-black bg-opacity-70 flex justify-center items-center'
                >
                    <div
                        className='flex flex-col gap-8 text-3xl font-semibold text-center  p-8 rounded-lg shadow-lg'
                    >
                        <h3
                            onClick={() => handleMenuItemClick("/")}
                            className="cursor-pointer hover:text-blue-300 transition-colors duration-200"
                        >
                            Home
                        </h3>
                        <h3
                            onClick={() => handleMenuItemClick("/dashboard")}
                            className="cursor-pointer hover:text-blue-300 transition-colors duration-200"
                        >
                            Dashboard
                        </h3>
                        <h3
                            onClick={() => handleMenuItemClick("/repos")}
                            className="cursor-pointer hover:text-blue-300 transition-colors duration-200"
                        >
                            Repositories
                        </h3>
                    </div>
                </div>
            )}
        </>
    );
}

export default Menubar;