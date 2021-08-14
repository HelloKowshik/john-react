import React, { useState } from 'react';
import Modal from './Modal';
import { data } from './data';

const ReducerBasics = () => {
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(data);
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>ADD</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default ReducerBasics;
