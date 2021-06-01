/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings, login } from 'src/actions';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state) => ({
  open: state.openLogin,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    // console.log('je veux ouvrir le login et modifier la valeur du state open');

    const action = toggleSettings();
    console.log('action', action);
    dispatch(action);
  },

  onSubmitForm: () => {
    console.log('Je veux envoyer une requête');
    const action = login();
    console.log('action', action);
    dispatch(action);
  },
});

// on passe les 2 fonctions à connect
// connect renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// on utilise componentToConnect pour connecter le composant stateless
// elle nous renvoie un composant connecté au state, ou enrichi de props
const connectedComponent = componentToConnect(Settings);

export default connectedComponent;
