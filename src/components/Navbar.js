import React from 'react'
import { NavLink } from "react-router-dom";


// import { FaFacebookSquare , FaInstagramSquare , FaGithubSquare } from 'react-icons/fa';
//import {GiHamburgerMenu} from "react-icons/gi"



const Navbar = () => {
    
  return (
    <>
    
    <div className="container1">
        <nav className='nav'>
        <div className='logo'>
        <h1>
            <span>Y</span>ogaSHE
        </h1>

        </div>
       
            <ul>
                <li >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/Learn">Learn</NavLink>
                </li>
                <li>
                <NavLink to="/SignUp">SignUp</NavLink>
                </li>
                <li>
                <NavLink to="/LogIn">LogIn</NavLink>
                </li>
            </ul>
        
            {/* <div className='social-media'>
        
        <ul className='social-media-desktop'>
        <li>
        <a href='#' target='nikita'>
         <FaFacebookSquare className='facebook'/>
        </a>
        </li>
        <li>
        <a href='#' target='nikita'>
         <FaInstagramSquare className='instagram'/>
        </a>
        </li>
        <li>
        <a href='#' target='nikita'>
         <FaGithubSquare className='github'/>
        </a>
        </li>
        </ul> 
        <div className="hamburger-menu">
         <a href='#'>
             <GiHamburgerMenu/>
         </a>
        </div> 
        </div> */}
        </nav>
        </div>
        
    </>
  )
}

export default Navbar