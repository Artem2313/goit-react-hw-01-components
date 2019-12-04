/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import StatisticalDetails from './StatisticalDetails';

const Statistics = ({ items = [] }, { title = 'File upload' }) => (
  <section className="statistics">
    {title.length > 0 && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {items.map(item => (
        <Fragment key={item.id}>
          <StatisticalDetails {...item} />
        </Fragment>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default Statistics;
