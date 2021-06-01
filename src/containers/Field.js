/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeInputValue } from 'src/actions';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state, ownProps) => ({
// le nom de la propriété (clé) correspond avec la props du composant à connecter
// ensuite on relie la propriété du state qu'on souhaite{
  inputValue: state.user[ownProps.name],
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    console.log('je veux modifier la valeur de user dans le state = ', value);

    // pour modifier une valeur du state
    // il faut créer une action : action types + action creator
    const action = changeInputValue(value, ownProps.name);
    console.log('action', action);
    dispatch(action);
  },
});

// on passe les 2 fonctions à connect
// connect renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// on utilise componentToConnect pour connecter le composant stateless
// elle nous renvoie un composant connecté au state, ou enrichi de props
const connectedComponent = componentToConnect(Field);

export default connectedComponent;
