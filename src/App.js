import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  function countAndcolor() {
    setCount(count + 1);
    setColor('pink');
  }
  useEffect(() => {
    console.log('Runs on every render');
  }); //Runs on every render
  useEffect(() => {
    console.log('Runs only on the first render');
  }, []); //Runs only on the first render
  useEffect(() => {
    console.log('run on count');
  }, [count]); //And any time any dependency value changes
  useEffect(() => {
    console.log('run on color');
  }, [color]); //And any time any dependency value changes
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
