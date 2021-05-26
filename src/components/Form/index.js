// == Import
import React from 'react';
import './styles.scss';
import { Send } from 'react-feather';

// == Composant
const Form = () => (
  <form className="form">
    <input className="form__input" type="text" placeholder="Saississez votre message" />
    <button className="form__button" type="submit">
      <Send size="100%" />
    </button>
  </form>
);

// == Export
export default Form;
