import React from 'react';

const FivePhotoTemplate = (props) => {
  if (props.photos.length) {
    return (
      <div className="five-expand-container">
        <div className="expand-room-name">{props.room}</div>
        <div className="expand-room-details">{props.details}</div>
        <div className="five-wrapper">
          <div className="grid-box fiveframe-expand-box-one">
            <img src={props.photos[0].link} className="expand-single-photo" />
          </div>
          <div className="grid-box fiveframe-expand-box-two">
            <img src={props.photos[1].link} className="expand-single-photo" />
          </div>
          <div className="grid-box fiveframe-expand-box-three">
            <img src={props.photos[2].link} className="expand-single-photo" />
          </div>
          <div className="grid-box fiveframe-expand-box-four">
            <img src={props.photos[3].link} className="expand-single-photo" />
          </div>
          <div className="grid-box fiveframe-expand-box-five">
            <img src={props.photos[4].link} className="expand-single-photo" />
          </div>
          <div className="grid-box fiveframe-expand-box-review">
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
      <div className="five-expand-container">
        <div className="expand-room-name">Loading...</div>
        <div className="expand-room-details">Loading...</div>
        <div className="five-wrapper">
          <div className="grid-box fiveframe-expand-box-one">Loading...</div>
          <div className="grid-box fiveframe-expand-box-two">Loading...</div>
          <div className="grid-box fiveframe-expand-box-three">Loading...</div>
          <div className="grid-box fiveframe-expand-box-four">Loading...</div>
          <div className="grid-box fiveframe-expand-box-five">Loading...</div>
          <div className="grid-box fiveframe-expand-box-review">Loading...</div>
        </div>
      </div>
    );
  }
};

export default FivePhotoTemplate;
