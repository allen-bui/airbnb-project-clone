import React from 'react';
import './Description.css';

// components
import RoomDetails from './Sub-Components/RoomDetails.jsx';
import OwnerReview from './Sub-Components/OwnerReview.jsx';

const Description = () => {
  return (
    <div className="full-description-box">
      <RoomDetails />
      <OwnerReview />
    </div>
  );
};

export default Description;
