/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Field from 'src/components/Field';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state, ownProps) => {
// le nom de la propriété (clé) correspond avec la props du composant à connecter
// ensuite on relie la propriété du state qu'on souhaite
  console.log('ownProps:', ownProps);
  return ({
    inputValue: state.user[ownProps.name],
  });
};
const mapDispatchToProps = (dispatch) => ({});

// on passe les 2 fonctions à connect
// connect renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// on utilise componentToConnect pour connecter le composant stateless
// elle nous renvoie un composant connecté au state, ou enrichi de props
const connectedComponent = componentToConnect(Field);

export default connectedComponent;
