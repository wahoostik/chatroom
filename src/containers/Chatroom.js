/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Chatroom from 'src/components/Chatroom';
import { websocketConnect } from 'src/actions';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  wsConnect: () => {
    console.log('je veux me connecter au websocket');
    const action = websocketConnect();
    // console.log('action', action);
    dispatch(action);
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = componentToConnect(Chatroom);

export default connectedComponent;
