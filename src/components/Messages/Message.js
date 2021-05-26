// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const Message = ({ author, content }) => (
  <div className="message">
    <p className="message__author">{author}</p>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// == Export
export default Message;
