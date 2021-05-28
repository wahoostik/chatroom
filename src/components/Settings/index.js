// == Import
import React from 'react';
import './styles.scss';

// == Composant
const Settings = () => (
  <div className="settings settings--open">
    <button type="button" className="settings__button">+</button>
    <form className="settings__form">
      <input type="email" placeholder="Email" className="settings__input" />
      <input type="password" placeholder="Mot de passe" className="settings__input" />
      <button type="submit" className="settings__submit">Se connecter</button>
    </form>
  </div>
);

// == Export
export default Settings;
