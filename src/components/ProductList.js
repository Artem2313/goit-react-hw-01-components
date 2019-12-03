/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductList = ({ items = [] }) => (
  <ul>
    {' '}
    {items.map(item => (
      <li key={item.id}>
        {' '}
        {/* // eslint-disable-next-line react/jsx-props-no-spreading */}{' '}
        <Product {...item} />{' '}
      </li>
    ))}{' '}
  </ul>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
