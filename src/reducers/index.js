/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// import
import {
  SET_INPUT_VALUE, SUBMIT_MESSAGE, TOGGLE_SETTINGS, CHANGE_INPUT_VALUE, SAVE_PSEUDO,
} from 'src/actions';
// import { getHighestId } from 'src/selectors';

// Le state initial est un objet vide
const initialState = {
  messagesData: [
    {
      id: 1,
      author: 'Super Computer',
      content: 'Hello !',
    },
    {
      id: 2,
      author: 'Super Computer',
      content: 'Bienvenue sur le chat :)',
    },
  ],
  newMessage: '',
  openLogin: false,
  user: {
    email: 'walter.white@breakingbad.com',
    password: 'heisenberg',
    pseudo: 'Anonymous',
  },
};

// Le reducer doit toujours retourner le state
const reducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    case SET_INPUT_VALUE:
      // console.log('case', action.type, action.value);

      // Récupérer la valeur de l'input et retourner le state modifié
      // On renvoi un nouvel objet avec les valeurs de l'ancien state avec le newMessage
      return {
        ...state,
        newMessage: action.value,
      };
    case SUBMIT_MESSAGE: {
      // console.log('case', action.type);

      // Si newMessage est une string vide, on retourne le state courant sans modifs
      // if (!state.newMessage) {
      //   return state;
      // }

      // // on récupère les ids des tâches = transformer le tableau de tâche en tableau d'ids
      // const ids = state.messagesData.map((task) => task.id);
      //
      // // on va déterminer quel est l'id max
      // const maxId = Math.max(...ids);

      // const message = {
      //   id: getHighestId(state) + 1,
      //   author: state.user.pseudo,
      //   content: state.newMessage,
      // };

      // ici on crée une nouvelle référence de tableau qui
      // viendra les anciens messages du state et on ajoute
      // en dernier le nouveau message reçu du serveur websocket
      const messages = [
        ...state.messagesData,
        action.theMessage,
      ];

      return {
        ...state,
        messagesData: messages,
        newMessage: '', // Pour remettre à zéro après avoir envoyer un message
      };
    }
    case TOGGLE_SETTINGS:
      // console.log('case', TOGGLE_SETTINGS);
      return {
        ...state,
        openLogin: !state.openLogin,
      };
    case CHANGE_INPUT_VALUE:
      // console.log('case', CHANGE_INPUT_VALUE);
      return {
        ...state,
        user: {
          ...state.user,
          // pour modifier dynamiquement des propriété d'objets,
          // on doit ouvrir les crochets et placer une chaine de caractère
          // à l'intérieur. Ici, cette string est contenue dans la proriété name
          // de l'action
          [action.name]: action.value,
        },
      };
    case SAVE_PSEUDO:
      // console.log('case', SAVE_PSEUDO);
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
        },
      };
    default:
      // On retourne le state de base
      return state;
  }
};
export default reducer;
