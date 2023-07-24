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
      switch (value) {
        case 'AC':
          setOutput('0');
          return '0';
        case '=':
          try {
            const sanitizedExpression = prevInput
              .replace(/x/g, '*')
              .replace(/÷/g, '/');
            const result = eval(sanitizedExpression);
            const roundedResult = Math.round(result * 100000000) / 100000000;
            setOutput(roundedResult.toString());
            return roundedResult.toString();
          } catch (error) {
            setOutput('Error');
            return '0';
          }
        case '.':
          const hasDecimal = prevInput.includes('.');
          const hasOperator = /[-+*/]/.test(prevInput.slice(-1));
          if (!hasDecimal && (!hasOperator || value === '-')) {
            return prevInput + value;
          }
          return prevInput;
        default:
          if (/[-+*/]/.test(value) && /[-+*/]/.test(prevInput.slice(-1))) {
            if (value === '-') {
              return prevInput + value;
            }
            return prevInput.replace(/[-+*/]+$/, '') + value;
          }
          if (prevInput === '0' && value !== '.') {
            return value;
          } else {
            return prevInput + value;
          }
      }
    });
  };

  const handleKeyboardInput = (event) => {
    const pressedKey = event.key;

    if (validKeys.includes(pressedKey)) {
      if (pressedKey === 'Backspace') {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (pressedKey === 'Enter' || pressedKey === '=') {
        event.preventDefault();
        handleButtonClick('=');
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
