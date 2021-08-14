import React, { useState, useContext } from 'react';
import { data } from '../use-reducer/data';

const PersonContext = React.createContext();

const ContextBasics = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) =>
    setPeople((people) => people.filter((p) => p.id !== id));
  return (
    <PersonContext.Provider value={{ removePerson }}>
      <h3>Context API</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <SingleItem key={person.id} {...person} />;
      })}
    </>
  );
};
const SingleItem = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  console.log(removePerson);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button type='submit' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default ContextBasics;
