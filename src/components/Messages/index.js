// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Message from './Message';

// == Composant
// On prends l'id du message pour la réconciliation, et on passe tout le reste au composant Message
const Messages = ({ messages }) => (
  <div className="messages">
    {messages.map((theMessage) => <Message key={theMessage.id} {...theMessage} />)}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

// == Export
export default Messages;
