import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h3>This is Error Page</h3>
      <Link to='/' className='btn'>
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
