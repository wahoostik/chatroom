/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import { LOGIN, savePseudo } from 'src/actions';

const auth = (store) => (next) => async (action) => {
  console.log('middleware authentification');
  switch (action.type) {
    case LOGIN: {
      // je peux récupérer le state courant grâce au store
      const state = store.getState();
      // à ce niveau là, on veut traiter la requête de connexion
      console.log('case', LOGIN);
      try {
        const result = await axios.post('http://localhost:3001/login', {
          email: state.user.email,
          password: state.user.password,
        });
        console.log('result', result);

        // une fois qu'on a la réponse on peut venir stocker le pseudo
        // du user dans le state. Modification de state => dispatch d'action
        const { pseudo } = result.data;
        const actionPseudo = savePseudo(pseudo);
        console.log('action', actionPseudo);

        // ici on a accès au store, donc on peut utiliser la fonction store.dispatch
        store.dispatch(actionPseudo);

        // next(action);
      }
      catch (error) {
        console.log('error', error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default auth;
