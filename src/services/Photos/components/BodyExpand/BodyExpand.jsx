import React from 'react';
import './BodyExpand.css';

// components
import FourPhotoTemplate from './Sub-Components/FourPhotoTemplate.jsx';
import FivePhotoTemplate from './Sub-Components/FivePhotoTemplate.jsx';
import ThreePhotoTemplate from './Sub-Components/ThreePhotoTemplate';

const BodyExpand = (props) => {
  return (
    <div>
      <FivePhotoTemplate
        photos={props.photos.livingRoom}
        room="Living room"
        details="Smart TV, Modern, Comfortable couch, Relaxing"
      />
      <FivePhotoTemplate
        photos={props.photos.kitchen}
        room="Kitchen"
        details="Beautiful, Modern, Fully equipped, Comfortable, Spacious"
      />
      <FourPhotoTemplate
        photos={props.photos.bedroom}
        room="Bedroom"
        details="Soothing, Spacious with plenty of natrual light"
      />
      <ThreePhotoTemplate
        photos={props.photos.bathroom}
        room="Bathroom"
        details="Modern, Bright, Soothing & relaxing"
      />
      <FourPhotoTemplate
        photos={props.photos.interior}
        room="Interior"
        details="Beautifully decorated, Ready for your enjoyment"
      />
      <ThreePhotoTemplate
        photos={props.photos.other}
        room="Other spaces"
        details="Extra rooms, Pretty arrangements & more"
      />
      <ThreePhotoTemplate
        photos={props.photos.backyard}
        room="Backyard"
        details="Great views, Minutes from the beach, Relax and unwind"
      />
      <ThreePhotoTemplate
        photos={props.photos.pets}
        room="Pets"
        details="Play fetch, ready for belly rubs, always a good boy"
      />
    </div>
  );
};

export default BodyExpand;
