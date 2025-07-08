import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import { useNavigate } from 'react-router-dom';

// Menubar -> only displayed in the component Dashboard and Repositories
const Menubar = () => {
    // toggle state ->  To show and menu elements
    const [toggle, settoggle] = useState(false);
    // To navigate respective page
    const navigate = useNavigate();

    // Whenever the user clicks on img he will toglle the state toggle
    const handleToggleMenu = () => {
        settoggle(prev => !prev);
    }

    // to navigate for respective page, on which user clicked
    const handleMenuItemClick = (path) => {
        settoggle(false); 
        navigate(path);
    }

    // Here, the problem is whenever the user clicks on any element after opening menu bar. The event bubbling occurs. to tackle that this function is called, if the user clicks other than any elements of menu bar what is on outer div. the toglle shoul be done. To close the menu bar
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
                        src={menu}
                        onClick={handleToggleMenu}
                        className='h-5 w-5 cursor-pointer md:h-9 md:w-9'
                        alt="Toggle Menu"
                    />
                    <h1 className="text-xl font-bold">GitInsight</h1>
                </div>
            </nav>

            {/* Only show menu when toggle is true */}
            {toggle && (
                <div
                    onClick={handleOverlayClick} 
                    className='fixed inset-0 z-[1000] text-white bg-black bg-opacity-70 flex justify-center items-center'
                >
                    <div
                        className='flex flex-col gap-8 text-xl font-semibold text-center  p-8 rounded-lg shadow-lg'
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