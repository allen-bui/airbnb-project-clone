import React from 'react';

const ThreePhotoTemplate = (props) => {
  if (props.photos.length) {
    return (
      <div className="three-expand-container">
        <div className="expand-room-name">{props.room}</div>
        <div className="expand-room-details">{props.details}</div>
        <div className="three-wrapper">
          <div className="grid-box threeframe-expand-box-one">
            <img src={props.photos[0].link} className="expand-single-photo" />
          </div>
          <div className="grid-box threeframe-expand-box-two">
            <img src={props.photos[1].link} className="expand-single-photo" />
          </div>
          <div className="grid-box threeframe-expand-box-three">
            <img src={props.photos[2].link} className="expand-single-photo" />
          </div>
          <div className="grid-box threeframe-expand-box-review">
            <div className="expand-room-review-container">
              <div className="expand-room-review-quotation">"</div>
              <div className="expand-room-review">
                You're going to love the {props.room.toLowerCase()}
              </div>
              <div className="expand-host-tag">Spongebob, your host</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="three-expand-container">
        <div className="expand-room-name">Loading...</div>
        <div className="expand-room-details">Loading...</div>
        <div className="three-wrapper">
          <div className="grid-box threeframe-expand-box-one">Loading...</div>
          <div className="grid-box threeframe-expand-box-two">Loading...</div>
          <div className="grid-box threeframe-expand-box-three">Loading...</div>
          <div className="grid-box threeframe-expand-box-review">
            Loading...
          </div>
        </div>
      </div>
    );
  }
};

export default ThreePhotoTemplate;
