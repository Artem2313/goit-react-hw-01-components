import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => (
  <StyledButton type={type} disabled={disabled} icon={icon}>
    {' '}
    {label}{' '}
  </StyledButton>
);
Button.defaultProps = {
  type: 'button',
  label: 'default',
  disabled: false,
  icon: ' ',
};

Button.propTypes = {
  type: PropTypes.elementType,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};
export default Button;
