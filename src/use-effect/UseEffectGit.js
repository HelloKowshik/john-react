import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

const UseEffectGit = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
    // console.log(data);
  };
  useEffect(() => getUsers(), []);

  return (
    <>
      <h4>Github Users</h4>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectGit;
