import React from 'react';
import myImg from '../Images/img.png';
import './Navbar.css';
import HeroSection from './HeroSection';
import WhatWeOfferSection from './WhatWeOfferSection';
import BlogsSection from './BlogsSection';
import LetsConnectSection from './LetsConnectSection';


const Navbar = () => {
    const handleNavigation = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
  return (

    <nav className="nav-container">
        <ul>
            <img src={myImg} className="logo" alt="Company" />
        <li>
          <a href="#" onClick={(event) => handleNavigation(event, 'home')}>Home</a>
        </li>
        <li>
          <a href="#" onClick={(event) => handleNavigation(event, 'what-we-offer')}>Blogs</a>
        </li>
        <li>
          <a href="#" onClick={(event) => handleNavigation(event, 'what-we-offer')}>What We Offer</a>
        </li>
      </ul>
        
        
        
    </nav>
  )
}

export default Navbar;