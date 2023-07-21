import React from 'react';
import '../styles/calculator.css';

const calcButtons = [
  {
    keyCode: '',
    key: 'AC',
    id: '',
    class: 'all-clear',
  },
  {
    keyCode: '',
    key: '/',
    id: '',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '*',
    id: '',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '7',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '8',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '9',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '-',
    id: '',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '4',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '5',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '6',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '+',
    id: '',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '1',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '2',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '3',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '=',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '0',
    id: '',
    class: 'button',
  },
  {
    keyCode: '',
    key: '.',
    id: '',
    class: 'button',
  },
];

const CalculatorButtons = () => {
  return calcButtons.map((button) => {
    return (
      <button className={button.class} value={button.key}>
        {button.key}
      </button>
    );
  });
};

const Calculator = () => {
  return (
    <div className='calc-keys'>
      <CalculatorButtons />
    </div>
  );
};

export default Calculator;
