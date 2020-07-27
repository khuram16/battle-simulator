import React from 'react';
import Logo from './Logo';

import '../styles/splashscreen.css'
import '../styles/common.css';

const SplashScreen: React.FC = () => {
    return (
      <div className="verticalhorizontal fadeout">
        <Logo/>
      </div>
    );
  };
  
  export default SplashScreen;
  