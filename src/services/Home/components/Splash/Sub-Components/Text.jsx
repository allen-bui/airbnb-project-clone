import React from 'react';

class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      splashText: '',
    };
  }
  render() {
    return (
      <div className="splash-text">
        <span>Modern Penthouse with beautiful mountain and ocean views</span>
      </div>
    );
  }
}

export default Text;
