// Action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

// Action creators
export const setInputValue = (valueData) => ({
  type: SET_INPUT_VALUE,
  value: valueData,
});

export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});
