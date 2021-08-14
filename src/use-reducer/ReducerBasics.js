import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalText: '',
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState('');
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const items = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: items });
      setName('');
    } else {
      dispatch({ type: 'A' });
    }
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalText={state.modalText} closeModal={closeModal} />
      )}
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
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              type='submit'
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ReducerBasics;
