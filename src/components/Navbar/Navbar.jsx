import React, {useState} from 'react'
// import { Link } from "react-router-dom";
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import {FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);
  const[darkMode, setDarkMode] = useState(true);
  const Menu = () => (  
    <>
    <ul>
    <li> Home</li>
    <li> Projects</li>
    </ul>
    </>
  )
  return (
    <div className="gradient__bg">
    <div className="navbar-logo">
      <p>Wuri</p>
    </div>
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
         ? <RiCloseLine color= "#fff" size={27} onClick={()=>setToggleMenu(false)}/>
         : <RiMenu3Line color= "#fff" size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
        <div className="navbar-menu_container slide-left">
          <div className="navbar-menu_container-links">
           <Menu/>
          </div>
        </div>
        )}
      </div>
      <div className='navbar-socials'>
        {darkMode
          ? <FaSun className="navbar-socials_icons" id='light-mode' onClick={()=>setDarkMode(false)}/>
          : <FaMoon className="navbar-socials_icons" id='dark-mode' onClick={()=>setDarkMode(true)}/>
        }
      </div>
    </div>
    </div>
  )
}

export default Navbar;