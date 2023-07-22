import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';

const App = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  return (
    <div>
      <div className='container'>
        <Display input={input} output={output} />
        <Calculator />
      </div>
      <Footer />
    </div>
  );
};

export default App;
