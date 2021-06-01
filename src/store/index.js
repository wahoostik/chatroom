/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Pour utiliser les middlewares, il faut les importer et les donner à la fonction applyMiddleware
// Les mettre dans l'ordre. L'ordre est important
import debugMiddleware from 'src/middlewares/debugMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import reducer from 'src/reducers';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(debugMiddleware, authMiddleware),
  // other store enhancers if any
));

export default store;
