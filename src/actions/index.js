// Action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// Action creators
export const setInputValue = (valueData) => ({
  type: SET_INPUT_VALUE,
  value: valueData,
});

export const submitMessage = (theMessage) => ({
  type: SUBMIT_MESSAGE,
  theMessage,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeInputValue = (valueData, nameData) => ({
  type: CHANGE_INPUT_VALUE,
  value: valueData,
  name: nameData,
});

export const login = () => ({
  type: LOGIN,
});

export const savePseudo = (pseudoData) => ({
  type: SAVE_PSEUDO,
  pseudo: pseudoData,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
