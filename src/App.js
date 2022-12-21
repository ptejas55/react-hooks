import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  function countAndcolor() {
    setCount(count + 1);
    setColor('pink');
  }
  return (
    <>
      <button
        type="button"
        style={{ width: '200px', height: '30px' }}
        onClick={countAndcolor}
      >
        {' '}
        Click me
      </button>
      <p style={{ backgroundColor: color }}>Your count is {count}</p>
    </>
  );
}
