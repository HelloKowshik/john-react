import React, { useEffect, useRef } from 'react';

const UseRef = () => {
  let refContainer = useRef(null);
  let divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>ADD</button>
        </div>
      </form>
      <div ref={divContainer}>Div Container</div>
    </>
  );
};

export default UseRef;
