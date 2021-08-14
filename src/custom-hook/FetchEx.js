import React from 'react';
import Product from './Product';
import { useFetch } from './use-fetch';
const url = 'https://course-api.com/javascript-store-products';

const FetchEx = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>Products</h2>
      <section className='products'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default FetchEx;
