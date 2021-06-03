/* eslint-disable no-console */
/* eslint-disable max-len */
// == Import
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Message from 'src/containers/Message';

// == Composant
// On prends l'id du message pour la réconciliation, et on passe tout le reste au composant Message
const Messages = ({ messages }) => {
  const messagesRef = useRef(null);

  // On va réagir à chaque rendu du composant mais on va limiter cette réaction au changement de messages
  useEffect(() => {
    console.log('éxécution du callback');
    console.log('scrollTop', messagesRef.current.scrollTop);
    console.log('scrollHeight', messagesRef.current.scrollHeight);
    // on vient réassigner le scrollTop à la valeur du scrollHeight
    // à chaque nouveau message
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="messages" ref={messagesRef}>
      {messages.map((theMessage) => <Message key={theMessage.id} {...theMessage} />)}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

// == Export
export default Messages;
