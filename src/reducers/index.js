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
};

// Le reducer doit toujours retourner le state
const reducer = (state = initialState, action = {}) => {
// On switch sur le type d'action
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
