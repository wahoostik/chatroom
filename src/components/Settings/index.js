/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// == Import
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Field from 'src/containers/Field';
import './styles.scss';

// == Composant
const Settings = ({ open, onClickButton, onSubmitForm }) => {
  const handleOnClick = () => {
    console.log('je clique sur le bouton');
    onClickButton();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit du form');
    // onSubmitForm();
    axios.post('http://localhost:3001/login', {
      email: 'walter.white@breakingbad.com',
      password: 'heisenberg'
    })
    .then((response) => {
      console.log('response', response)
    })
    .catch((error) => console.log(error))
  };

  // Si open est true, settings settings--open, sinon settings
  const openClassName = open ? 'settings settings--open' : 'settings';

  return (
    <div className={openClassName}>
      <button
        type="button"
        className="settings__button"
        onClick={handleOnClick}
      >
        +
      </button>
      <form className="settings__form" onSubmit={handleOnSubmit}>
        <Field
          type="email"
          label="Email"
          name="email"
        />
        <Field
          type="password"
          label="Mot de passe"
          name="password"
        />
        <button
          type="submit"
          className="settings__submit"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Settings;
