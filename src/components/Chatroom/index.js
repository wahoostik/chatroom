// == Import
import React from 'react';
import './styles.scss';
// == Import Composants
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;
