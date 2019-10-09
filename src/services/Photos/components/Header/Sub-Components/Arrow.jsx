import React from 'react';

const arrow =
  'm 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z';

const Arrow = (props) => {
  return (
    <div onClick={props.backCallback}>
      <svg viewBox="0 0 18 18" className="photos-back-arrow">
        <path d={arrow} />
      </svg>
    </div>
  );
};

export default Arrow;