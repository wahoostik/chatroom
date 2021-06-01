/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from 'src/reducers';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
