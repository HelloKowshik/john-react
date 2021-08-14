import React from 'react';
import Author from './Author';
import Image from './Image';
import Title from './Title';

const Book = ({ image, title, author }) => {
  return (
    <article className='book'>
      <Image image={image} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};

export default Book;
