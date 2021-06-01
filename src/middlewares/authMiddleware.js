/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import { LOGIN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  console.log('middleware authentification');
  switch (action.type) {
    case LOGIN: {
      // à ce niveau là, on veut traiter la requête de connexion
      console.log('case', LOGIN);
      axios.post('http://localhost:3001/login', {
        email: 'walter.white@breakingbad.com',
        password: 'heisenberg',
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch((error) => console.log('error', error));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
