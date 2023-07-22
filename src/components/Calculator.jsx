import React from 'react';
import '../styles/calculator.css';
import CalculatorButtons from './CalculatorButtons';

const Calculator = ({ handleButtonClick }) => {
  return (
    <div className='calc-keys'>
      <CalculatorButtons handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
