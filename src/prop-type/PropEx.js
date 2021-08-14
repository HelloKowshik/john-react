import React from 'react';
import { useFetch } from '../custom-hook/use-fetch';
import Products from './Products';

const url = 'https://course-api.com/react-prop-types-example';
const PropEx = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>Products</h2>
      <section className='products'>
        {products.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default PropEx;
