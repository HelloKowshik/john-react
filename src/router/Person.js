import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from './data';

const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState('Default User');
  useEffect(() => {
    let getName = data.find((person) => person.id === parseInt(id));
    setName(getName.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/' className='btn'>
        Back To Home
      </Link>
    </div>
  );
};

export default Person;
