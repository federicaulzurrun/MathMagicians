import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

function Button(props) {
  const { label, color } = props;

  return (
    <button className="btns" type="button" style={{ backgroundColor: color }}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
