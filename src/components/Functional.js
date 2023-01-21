import React, { useState } from 'react';
import cover from '../images/cover.jpg';

const Functional = () => {
  const [playing, setPlaying] = useState(true);

  const play = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <h2>Music player</h2>
      <div>
        <img
          src={cover}
          alt='Mr. Morale & the Big Steppers Studio album by Kendrick Lamar'
        />
        <div>
          <button>Prev</button>
          <button onClick={play}>{playing ? 'Pause' : 'Play'}</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Functional;
