// Example scrolling effect using React Hooks
import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';

function ScrollEffectComponent() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '2000px' }}> {/* Add some height to allow scrolling */}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%, ${scrollTop}px)` }}>
        
        <h1></h1>
      </div>
    </div>
  );
}

export default ScrollEffectComponent;
