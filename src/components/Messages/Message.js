// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Composant
const Message = ({ author, content, pseudo }) => {
  // Si c'est bon, 'message message--is-mine', sinon 'message'
  const classnames = classNames('message', { 'message message--is-mine': author === pseudo });

  return (
    <div className={classnames}>
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
};

// == Export
export default Message;
