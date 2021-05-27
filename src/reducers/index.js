/* eslint-disable no-console */
// import
import { SET_INPUT_VALUE, SUBMIT_MESSAGE } from 'src/actions';

// Le state initial est un objet vide
const initialState = {
  messagesData: [
    {
      id: 1,
      author: 'Super Tony',
      content: 'Hey !',
    },
    {
      id: 2,
      author: 'Super Computer',
      content: 'Hello !',
    },
    {
      id: 3,
      author: 'Super Tony',
      content: 'How are you ?',
    },
  ],
  newMessage: '',
};

// Le reducer doit toujours retourner le state
const reducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    case SET_INPUT_VALUE:
      console.log('case', action.type, action.value);

      // Récupérer la valeur de l'input et retourner le state modifié
      // On renvoi un nouvel objet avec les valeurs de l'ancien state avec le newMessage
      return {
        ...state,
        newMessage: action.value,
      };
    case SUBMIT_MESSAGE: {
      console.log('case', action.type);

      // ici on crée une nouvelle référence de tableau qui
      // viendra les anciens messages du state et on ajoute
      // en dernier le nouveau message reçu
      const message = {
        id: 4,
        author: 'Tony',
        content: state.newMessage,
      };

      const messages = [
        ...state.messagesData,
        message,
      ];

      return {
        ...state,
        messagesData: messages,
      };
    }
    default:
      // On retourne le state de base
      return state;
  }
};
export default reducer;
