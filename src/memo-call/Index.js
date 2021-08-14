import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../custom-hook/use-fetch';
const url = 'https://course-api.com/javascript-store-products';

const calculateExpensiveProd = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const addToCart = useCallback(() => setCart(cart + 1), [cart]);
  const mostExpensive = useMemo(
    () => calculateExpensiveProd(products),
    [products]
  );
  return (
    <>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Count
      </button>
      <h2>Cart: {cart}</h2>
      <h4>Most Expensive Product: {mostExpensive}</h4>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => console.log('Big List'));
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => console.count('items-'));
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className='btn' onClick={addToCart}>
        Add to cart
      </button>
    </article>
  );
};

export default Index;
