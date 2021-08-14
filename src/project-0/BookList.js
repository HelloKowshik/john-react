import React from 'react';
import Book from './Book';
import { dataArr } from './data';

const BookList = () => {
  return (
    <section className='booklist'>
      {dataArr.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

export default BookList;
