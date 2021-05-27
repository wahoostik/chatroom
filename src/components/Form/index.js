/* eslint-disable no-console */
// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Send } from 'react-feather'; // Icône du boutton

// == Composant
const Form = ({ inputValue, onChangeInputValue }) => {
  const handleOnChange = (event) => {
    console.log('handle on change =', event.target.value);
    onChangeInputValue(event.target.value);
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Saississez votre message"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button className="form__button" type="submit">
        <Send size="100%" />
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

// == Export
export default Form;
