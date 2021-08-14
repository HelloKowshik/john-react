import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/default-image.jpeg';

const Products = (props) => {
  const { image, name, price } = props;
  const url = image && image.url;
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name} />
      <h4>{name || 'Default Name'}</h4>
      <p>{price || 3.99}</p>
    </article>
  );
};

Products.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Products.defaultProps = {
//   image: defaultImage,
//   name: 'Default Name',
//   price: 3.99,
// };

export default Products;
