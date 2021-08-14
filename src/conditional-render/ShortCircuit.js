import React, { useEffect, useState } from 'react';

const ShortCircuit = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h4>Short Circuit</h4>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window Size: {size}PX</h1>
    </div>
  );
};

export default ShortCircuit;
