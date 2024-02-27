import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2017 BlueTick Consultant</p>
        <img src="./Images/img.png" className='footerlogo' alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;

