/* eslint-disable no-console */
// import
import { SET_INPUT_VALUE } from 'src/actions';

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
    default:
      // On retourne le state de base
      return state;
  }
};
export default reducer;
