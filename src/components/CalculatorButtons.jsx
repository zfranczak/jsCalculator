import React from 'react';

const calcButtons = [
  {
    keyCode: '',
    value: 'AC',
    id: 'clear',
    class: 'all-clear',
  },
  {
    keyCode: '47',
    value: '/',
    id: 'divide',
    class: 'operator button',
  },
  {
    keyCode: '42',
    value: '*',
    id: 'multiply',
    class: 'operator button',
  },
  {
    keyCode: '',
    value: '7',
    id: 'seven',
    class: 'number button',
  },
  {
    keyCode: '',
    value: '8',
    id: 'eight',
    class: 'number button',
  },
  {
    keyCode: '',
    value: '9',
    id: 'nine',
    class: 'number button',
  },
  {
    keyCode: '45',
    value: '-',
    id: 'subtract',
    class: 'operator button',
  },
  {
    keyCode: '',
    value: '4',
    id: 'four',
    class: 'number button',
  },
  {
    keyCode: '',
    value: '5',
    id: 'five',
    class: 'number button',
  },
  {
    keyCode: '',
    value: '6',
    id: 'six',
    class: 'number button',
  },
  {
    keyCode: '43',
    value: '+',
    id: 'add',
    class: 'operator button',
  },
  {
    keyCode: '',
    value: '1',
    id: 'one',
    class: 'number button',
  },
  {
    keyCode: '',
    value: '2',
    id: 'two',
    class: 'number button',
  },
  {
    keyCode: '',
    value: '3',
    id: 'three',
    class: 'number button',
  },
  {
    keyCode: '61',
    value: '=',
    id: 'equals',
    class: 'equals button',
  },
  {
    keyCode: '',
    value: '0',
    id: 'zero',
    class: 'number zero button',
  },
  {
    keyCode: '46',
    value: '.',
    id: 'decimal',
    class: 'decimal button',
  },
];

const CalculatorButtons = ({ handleButtonClick }) => {
  return calcButtons.map((button) => {
    return (
      <button
        className={button.class}
        value={button.value}
        id={button.id}
        onClick={() => handleButtonClick(button.value)}
      >
        {button.value}
      </button>
    );
  });
};

export default CalculatorButtons;
