import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

function Button(props) {
  const { label, color, onClick } = props;

  return (
    <button className="btns" type="button" style={{ backgroundColor: color }} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
