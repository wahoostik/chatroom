/* eslint-disable no-console */
// == Import
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import './styles.scss';

// == Composant
const Settings = ({ open, onClickButton }) => {
  const handleOnClick = () => {
    console.log('je clique sur le bouton');
    onClickButton();
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
      <form className="settings__form">
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
};

// == Export
export default Settings;
