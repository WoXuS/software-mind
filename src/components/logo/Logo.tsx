import React, { useState } from 'react';
import './Logo.css';
import logo from './logo.svg';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`logo-container ${isHovered ? 'gradient-bg' : ''}`}>
      <img 
        src={logo} 
        alt='Software Mind' 
        className='logo' 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default Logo;
