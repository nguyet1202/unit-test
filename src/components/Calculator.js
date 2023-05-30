import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };
  const handleSubtract = () => {
    const difference = number1 - number2;
    setResult(difference);
  };
  const handleMultiply = () => {
    const product = number1 * number2;
    setResult(product);
  };
  return (
    <div>
      <input type="number"  value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        data-testid="number-input-1"
      />
      <input type="number" value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        data-testid="number-input-2"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <div data-testid="result">{result}</div>
    </div>
  );
};

export default Calculator;
