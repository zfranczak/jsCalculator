import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';

const App = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('0');

  const handleButtonClick = (value) => {
    setInput((prevInput) => {
      if (prevInput === '0' && value !== '.') {
        return value;
      } else {
        return prevInput + value;
      }
    });
  };

  const handleKeyboardInput = (event) => {
    const pressedKey = event.key;
    const validKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      '-',
      '*',
      '/',
      '.',
      '=',
      'Enter',
      'Backspace',
    ];
    if (validKeys.includes(pressedKey)) {
      handleButtonClick(pressedKey);
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyboardInput}>
      <div className='container'>
        <Display input={input} output={output} />
        <Calculator handleButtonClick={handleButtonClick} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
