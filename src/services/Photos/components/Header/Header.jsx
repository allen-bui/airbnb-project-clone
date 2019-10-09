import React from 'react';
import './Header.css';

// components
import Arrow from './Sub-Components/Arrow.jsx';
import Button from './Sub-Components/Button.jsx';

const Header = (props) => {
  return (
    <div className="photos-header">
      <Arrow backCallback={props.backCallback} />
      <Button
        buttonCallback={props.buttonCallback}
        buttonText={props.buttonText}
      />
    </div>
  );
};

export default Header;
