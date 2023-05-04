import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };
  return (
    <div className="calculator">
      <div className="screen">{state.next || state.total || '0'}</div>
      <div className="buttons">
        <div className="row">
          <Button label="AC" onClick={() => handleClick('AC')} />
          <Button label="+/-" onClick={() => handleClick('+/-')} />
          <Button label="%" onClick={() => handleClick('%')} />
          <Button label="÷" color="#ff9500" onClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handleClick('7')} />
          <Button label="8" onClick={() => handleClick('8')} />
          <Button label="9" onClick={() => handleClick('9')} />
          <Button label="x" color="#ff9500" onClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleClick('4')} />
          <Button label="5" onClick={() => handleClick('5')} />
          <Button label="6" onClick={() => handleClick('6')} />
          <Button label="-" color="#ff9500" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handleClick('1')} />
          <Button label="2" onClick={() => handleClick('2')} />
          <Button label="3" onClick={() => handleClick('3')} />
          <Button label="+" color="#ff9500" onClick={() => handleClick('+')} />
        </div>
        <div className="rowFirst">
          <Button label="0" onClick={() => handleClick('0')} />
          <Button label="." onClick={() => handleClick('.')} />
          <Button label="=" color="#ff9500" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
