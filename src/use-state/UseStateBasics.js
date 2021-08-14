import React, { useState } from 'react';
import { booksData } from '../books';

const UseStateBasics = () => {
  const [books, setBooks] = useState(booksData);
  const removeItem = (id) => setBooks(books.filter((b) => b.id !== id));

  return (
    <>
      <h4>Use State Basics</h4>
      {books.map((book) => (
        <div key={book.id}>
          <p className='item'>
            {book.title}
            <button onClick={() => removeItem(book.id)}>Remove</button>
          </p>
        </div>
      ))}
      <button className='btn' onClick={() => setBooks([])}>
        Clear All
      </button>
    </>
  );
};

export default UseStateBasics;
