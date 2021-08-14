import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h2>People Page</h2>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
