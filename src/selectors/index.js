/* eslint-disable import/prefer-default-export */
// les selectors sont des fonctions qui vont traiter le state ou une partie du state
// pour renvoyer des nouvelles données
// on utilisera ces selectors dans les containers ou les reducers
export const getHighestId = ({ messagesData }) => {
  // récupérer les ids des tâches = transformer le tableau de tâche en tableau d'ids
  const ids = messagesData.map((message) => message.id);

  // on retourne l'id max
  return Math.max(...ids);
};
