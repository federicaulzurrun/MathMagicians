import React from 'react';
import Button from './Buttons';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="screen">0</div>
    <div className="buttons">
      <div className="row">
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="&divide;" color="#ff9500" />
      </div>
      <div className="row">
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" color="#ff9500" />
      </div>
      <div className="row">
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" color="#ff9500" />
      </div>
      <div className="row">
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" color="#ff9500" />
      </div>
      <div className="rowFirst">
        <Button label="0" />
        <Button label="." />
        <Button label="=" color="#ff9500" />
      </div>
    </div>
  </div>
);

export default Calculator;
