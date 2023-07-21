import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Display from './components/Display';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <Calculator />
    </div>
  );
};

export default App;
