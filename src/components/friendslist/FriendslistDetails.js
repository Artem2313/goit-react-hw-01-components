/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const FriendslistDetails = ({ avatar, isOnline, name, alt }) => (
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={alt} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendslistDetails.defaultProps = {
  alt: 'user avatar',
};

FriendslistDetails.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  alt: PropTypes.string,
};

export default FriendslistDetails;
