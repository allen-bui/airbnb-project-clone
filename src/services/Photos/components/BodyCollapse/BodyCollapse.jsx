import React from 'react';
import './BodyCollapse.css';

// components
import PhotoStrip from './Sub-Components/PhotoStrip.jsx';

const BodyCollapse = (props) => {

  return (
    <div className="body-container">
      <div className="body-title">All rooms</div>
      <PhotoStrip
        title="Living room"
        photos={props.photos.livingRoom}
        callback={props.callback}
      />
      <PhotoStrip
        title="Kitchen"
        photos={props.photos.kitchen}
        callback={props.callback}
      />
      <PhotoStrip
        title="Bedroom"
        photos={props.photos.bedroom}
        callback={props.callback}
      />
      <PhotoStrip
        title="Bathroom"
        photos={props.photos.bathroom}
        callback={props.callback}
      />
      <PhotoStrip
        title="Interior"
        photos={props.photos.interior}
        callback={props.callback}
      />
      <PhotoStrip
        title="Other"
        photos={props.photos.other}
        callback={props.callback}
      />
      <PhotoStrip
        title="Backyard"
        photos={props.photos.backyard}
        callback={props.callback}
      />
      <PhotoStrip
        title="Pets"
        photos={props.photos.pets}
        callback={props.callback}
      />
    </div>
  );
}

export default BodyCollapse;
