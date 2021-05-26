// == Import
import React from 'react';
import './styles.scss';
import Message from './Message';

// == Composant
const Messages = () => (
  <div className="messages">
    <h1>Composant : Messages</h1>
    <Message />
    <Message />
    <Message />
    <Message />
  </div>
);

// == Export
export default Messages;
