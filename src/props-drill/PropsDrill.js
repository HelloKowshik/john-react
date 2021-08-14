import React, { useState } from 'react';
import { data } from '../use-reducer/data';

const PropsDrill = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) =>
    setPeople((people) => people.filter((p) => p.id !== id));
  return (
    <section>
      <h3>Props Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SingleItem key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </>
  );
};
const SingleItem = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button type='submit' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropsDrill;
