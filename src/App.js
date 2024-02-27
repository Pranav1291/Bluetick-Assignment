import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Navbar from './Navbar';

import './App.css';

import HeroSection from './components/HeroSection';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import BlogsSection from './components/BlogsSection';
import LetsConnectSection from './components/LetsConnectSection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar.jsx';
import './index.css';
//import ScrollEffectComponent from './components/ScrollEffectComponent.jsx';
// import './Navbar.css'
 

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <HeroSection />
      <WhatWeOfferSection />
      <BlogsSection />
      <LetsConnectSection />
      <FooterSection />
    </div>
  );
}

export default App;
