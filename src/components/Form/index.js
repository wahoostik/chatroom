/* eslint-disable no-console */
// == Import
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Send } from 'react-feather'; // Icône du boutton

// == Composant
const Form = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  // la référence est le moyen d'atteindre le composant React
  // une fois qu'il sera injecté dans le DOM
  const inputRef = useRef(null); // null : je démarre de zéro, il n'y a pas de référence avant

  // au 1er rendu du composant input, je veux mettre le focus dessus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnChange = (event) => {
    // console.log('handle on change =', event.target.value);
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    // On arrête le comportement par défaut du formulaire
    event.preventDefault();
    console.log('handle on submit');

    // Pour faire un submit, il faut une valeur dans inputValue
    if (inputValue) {
      onSubmitForm();
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        ref={inputRef}
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
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Form;
