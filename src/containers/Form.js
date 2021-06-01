/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue, submitMessage } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    console.log('je veux modifier la valeur de newMessage =', value);

    // pour modifier une valeur du state
    // il faut créer une action : action types + action creator
    const action = setInputValue(value);
    console.log('action', action);
    dispatch(action);
  },
  onSubmitForm: (message) => {
    console.log('je veux envoyer le newMessage dans le state');
    const action = submitMessage(message);
    console.log('action', action);
    dispatch(action);
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = componentToConnect(Form);

export default connectedComponent;
