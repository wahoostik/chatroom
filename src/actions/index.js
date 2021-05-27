// Action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

// Action creators
export const setInputValue = (valueData) => ({
  type: SET_INPUT_VALUE,
  value: valueData,
});
