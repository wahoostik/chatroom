/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';
import { isAuthorMessage } from 'src/selectors';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state, ownProps) => ({
  // pseudo: state.user.pseudo,
  // plutôt que de donner le pseudo à notre composant, on fait la comparaison directement dans le container
  // Si state.user.pseudo === ownProps.author, alors la props isMine vaudra true, sinon il vaudra false
  // isMine: state.user.pseudo === ownProps.author,
  isMine: isAuthorMessage(state, ownProps.author),
});
const mapDispatchToProps = (dispatch) => ({});

// on passe les 2 fonctions à connect
// connect renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// on utilise componentToConnect pour connecter le composant stateless
// elle nous renvoie un composant connecté au state, ou enrichi de props
const connectedComponent = componentToConnect(Message);

export default connectedComponent;
