// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const Field = ({
  label, name, type, inputValue,
}) => (
  <div className="field">
    <label htmlFor={name} className="field__label">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={label}
      className="field__input"
      value={inputValue}
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

// == Export
export default Field;
