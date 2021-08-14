import React, { useEffect } from 'react';

const Modal = ({ modalText, closeModal }) => {
  useEffect(() => setTimeout(() => closeModal(), 2000));
  return (
    <div className='modal'>
      <p>{modalText}</p>
    </div>
  );
};

export default Modal;
