import React from 'react';
import './Navigation.css';

// Components
import SingleMenuItem from './Sub-Components/SingleNavigationItem.jsx';
import Logo from './Sub-Components/Logo.jsx';
import Carrot from './Sub-Components/Carrot.jsx';
import Search from './Sub-Components/Search.jsx';

const Navigation = () => {
  return (
    <div id="header">
      <div className="left-box">
        <Logo />
        <Carrot />
      </div>
      <div className="right-box">
        <Search />
      </div>
      <div className="menu-box">
        {['Log in', 'Sign up', 'Help', 'Become a host'].map(
          (element, index) => {
            return <SingleMenuItem element={element} key={index} />;
          },
        )}
      </div>
    </div>
  );
};

export default Navigation;
