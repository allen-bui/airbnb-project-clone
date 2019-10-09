import React from 'react';

const tourIcon =
  'M 3 7.5 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z m 12.75 0 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z m -10.5 -6 A 0.75 0.75 0 0 1 6 0.75 h 9 a 0.75 0.75 0 0 1 0 1.5 H 6 a 0.75 0.75 0 0 1 -0.75 -0.75 Z m 10.5 12 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z M 3 1.5 a 1.5 1.5 0 1 1 -2.999 0.001 A 1.5 1.5 0 0 1 3 1.5 Z m 0 12 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
  }
  render() {
    return (
      <div className="photos-view-button-div" onClick={() => this.props.buttonCallback('default')}>
        <button className="photo-view-button" >
          <div className="photo-button-left-div">
            <svg viewBox="0 0 16 16" className="tour-icon">
              <path d={tourIcon} />
            </svg>
          </div>
          <div className="photo-button-right-div">{this.props.buttonText}</div>
        </button>
      </div>
    );
  }
}

export default Button;
