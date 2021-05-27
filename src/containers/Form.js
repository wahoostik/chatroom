/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Form from 'src/components/Form';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// branchement en écriture du state
const mapDispatchToProps = () => ({
  onChangeInputValue: () => {
    console.log('je veux modifier la valeur de newMessage');
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = componentToConnect(Form);

export default connectedComponent;
