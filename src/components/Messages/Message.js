// == Import
import React from 'react';
import PropTypes from 'prop-types';
// classNames permet d'avoir des noms de classes injecter conditionenellement
import classNames from 'classnames';
import './styles.scss';

// == Composant
const Message = ({ author, content, isMine }) => {
  // Si c'est bon, 'message message--is-mine', sinon 'message'
  const classnames = classNames('message', { 'message message--is-mine': isMine });

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
  isMine: PropTypes.bool.isRequired,
};

// == Export
export default Message;
