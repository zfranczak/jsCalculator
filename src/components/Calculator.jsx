import React from 'react';
import '../styles/calculator.css';

const calcButtons = [
  {
    keyCode: '',
    key: 'AC',
    id: 'clear',
    class: 'all-clear',
  },
  {
    keyCode: '',
    key: '/',
    id: 'divide',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '*',
    id: 'multiply',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '7',
    id: 'seven',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '8',
    id: 'eight',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '9',
    id: 'nine',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '-',
    id: 'subtract',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '4',
    id: 'four',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '5',
    id: 'five',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '6',
    id: 'six',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '+',
    id: 'add',
    class: 'operator button',
  },
  {
    keyCode: '',
    key: '1',
    id: 'one',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '2',
    id: 'two',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '3',
    id: 'three',
    class: 'number button',
  },
  {
    keyCode: '',
    key: '=',
    id: 'equals',
    class: 'equals button',
  },
  {
    keyCode: '',
    key: '0',
    id: 'zero',
    class: 'number zero button',
  },
  {
    keyCode: '',
    key: '.',
    id: 'decimal',
    class: 'decimal button',
  },
];

const CalculatorButtons = () => {
  return calcButtons.map((button) => {
    return (
      <button className={button.class} value={button.key} id={button.id}>
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
