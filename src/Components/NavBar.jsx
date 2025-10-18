import React from "react";
import { Link, NavLink } from "react-router";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-8 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation" className="text-base">Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-lg sm:text-xl flex items-center gap-2">
            <img 
            src="/logo-hero-IO.png" 
            alt="" 
            className="w-6 h-6 sm:w-8 sm:h-8"
            /> <span className="hidden xs:inline">HERO.IO</span> 
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='https://github.com/Abidafi' target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 hover:cursor-pointer text-sm sm:text-base">
            <img 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            src="/Github.png" 
            alt="" 
            /> 
            <span className="hidden xs:inline">Contribute</span> 
           </button>
          </Link>  
        </div>
    </div>
  );
};

export default NavBar;
