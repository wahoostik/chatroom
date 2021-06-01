/* eslint-disable no-console */
// un middleware est une fonction triple flêchée
// elle nous donne accès à trois choses
// - store: le store qu'on a confié au Provider
// - next: fonction qui dit si on continue ou pas, si on passe au middleware suivant ou au reducer
// - action: action qu'on dispatch
const debug = (store) => (next) => (action) => {
  console.log('state:', store.getState());
  console.log('action:', action);
  // si on ne met pas next(), on arrête le dispatch de l'action
  // next marche un peu comme un videur de boite, il autorise ou pas
  // l'action a passer. Bien passer l'action en argument.
  next(action);
};

export default debug;
