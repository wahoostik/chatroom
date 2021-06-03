/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
// == Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
// == Import Composants
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

// == Composant
const Chatroom = ({ wsConnect }) => {
  // Au premier rendu du composant sera rendu dans le DOM, je veux me connecter au serveur websocket
  useEffect(() => {
    // Pour se connecter, on va passer par un middleware
    // console.log('je veux me connecter au websocket');
    wsConnect();
  }, []);
  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

Chatroom.propTypes = {
  wsConnect: PropTypes.func.isRequired,
};

// == Export
export default Chatroom;
