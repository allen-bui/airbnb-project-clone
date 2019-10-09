import React from 'react';

const carrot =
  'm 16.29 4.3 a 1 1 0 1 1 1.41 1.42 l -8 8 a 1 1 0 0 1 -1.41 0 l -8 -8 a 1 1 0 1 1 1.41 -1.42 l 7.29 7.29 Z';

const Carrot = () => {
  return (
    <div className="carrot-box">
      <svg viewBox="0 0 18 18" role="presentation" className="carrot">
        <path d={carrot} />
      </svg>
    </div>
  );
};

export default Carrot;