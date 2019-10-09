import React from 'react';

const tourIcon =
  'M 3 7.5 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z m 12.75 0 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z m -10.5 -6 A 0.75 0.75 0 0 1 6 0.75 h 9 a 0.75 0.75 0 0 1 0 1.5 H 6 a 0.75 0.75 0 0 1 -0.75 -0.75 Z m 10.5 12 a 0.75 0.75 0 0 1 -0.75 0.75 H 6 a 0.75 0.75 0 0 1 0 -1.5 h 9 a 0.75 0.75 0 0 1 0.75 0.75 Z M 3 1.5 a 1.5 1.5 0 1 1 -2.999 0.001 A 1.5 1.5 0 0 1 3 1.5 Z m 0 12 a 1.5 1.5 0 1 1 -3 0 a 1.5 1.5 0 0 1 3 0 Z';

class TourHomeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tour-button-div">
        <button className="tour-button" onClick={this.props.callback}>
          <div className="tour-button-left-div">
            <svg viewBox="0 0 16 16" className="tour-icon">
              <path d={tourIcon} />
            </svg>
          </div>
          <div className="tour-button-right-div">TOUR THIS HOME</div>
        </button>
      </div>
    );
  }
}

export default TourHomeButton;
