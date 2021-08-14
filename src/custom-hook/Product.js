import React from 'react';

const Product = (props) => {
  const { name, price } = props.fields;
  return (
    <article className='product'>
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};

export default Product;
