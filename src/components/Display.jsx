import React from 'react';
import '../styles/display.css';

const Display = ({ input, output }) => {
  return (
    <div className='display'>
      <div className='output'>
        <span className='result'>{output}</span>
        <span id='display' className='input'>
          {input}
        </span>
      </div>
    </div>
  );
};

export default Display;
