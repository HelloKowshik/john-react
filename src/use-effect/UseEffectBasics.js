import React, { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  let [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setSize(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setSize(window.innerWidth));
    };
  });
  return (
    <>
      <h4>useEffect Basic</h4>
      <h3>Window Size: {size} PX</h3>
    </>
  );
};

export default UseEffectBasics;
