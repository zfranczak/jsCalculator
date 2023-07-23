import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';

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

const App = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('0');

  const handleButtonClick = (value) => {
    setInput((prevInput) => {
      switch (true) {
        case prevInput === '0' && value !== '.':
          return value;
        case value === 'AC':
          setInput('0');
          setOutput('0');
        default:
          return prevInput + value;
      }
    });
  };

  const handleKeyboardInput = (event) => {
    const pressedKey = event.key;

    if (validKeys.includes(pressedKey)) {
      if (pressedKey === 'Backspace') {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (pressedKey === 'Enter') {
        event.preventDefault();
        setInput('=');
      } else {
        handleButtonClick(pressedKey);
      }
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
