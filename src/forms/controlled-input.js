import React, { useState } from 'react';

const ControlledInput = () => {
  let [person, setPerson] = useState({ fullName: '', email: '', phone: '' });
  let [peoples, setPeople] = useState([]);
  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.fullName && person.email && person.phone) {
      const new_person = { ...person, id: new Date().getTime().toString() };
      setPeople([...peoples, new_person]);
      setPerson({ fullName: '', email: '', phone: '' });
    } else {
      alert('Empty Value!');
    }
  };
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='fullName'>Name:</label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='email'
              id='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              name='phone'
              id='phone'
              value={person.phone}
              onChange={handleChange}
            />
          </div>
          <button className='btn' onClick={handleSubmit}>
            Add person
          </button>
        </form>
        {peoples.map((person) => {
          const { id, fullName, email, phone } = person;
          return (
            <div className='item' key={id}>
              <h4>{fullName}</h4>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInput;
