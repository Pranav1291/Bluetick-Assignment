import React from 'react';
import '../App.css';
import ScrollEffectComponent from './ScrollEffectComponent';
 

const HeroSection = () => {
  return (
    
    <section className="hero">
        
      <div className="container">
      
        <h1>Hero Section </h1>
        <h1>Founded in 2017, Bluetick Consultants is a technology-driven firm...</h1>
        <p>Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
        <a href="https://www.bluetickconsultants.com/generative-ai.html" className="btn">To know more about us</a>
      </div>
      
    </section>
  );
}

export default HeroSection;
