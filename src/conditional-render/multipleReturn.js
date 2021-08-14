import React, { useEffect, useState } from 'react';

const url = 'http://api.github.com/users/QuincyLarson';

const MultipleReturn = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState('Default User');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setUser(data.name);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error Occured...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturn;
