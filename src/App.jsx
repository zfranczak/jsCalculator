import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';

const App = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => {
      if (prevInput === '0' && value !== '.') {
        return value; // If input is '0', replace it with the clicked button value (except for '.')
      } else {
        return prevInput + value; // Otherwise, append the clicked button value to the input
      }
    });
  };

  return (
    <div>
      <div className='container'>
        <Display input={input} output={output} />
        <Calculator handleButtonClick={handleButtonClick} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
