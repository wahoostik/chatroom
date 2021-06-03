/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { WEBSOCKET_CONNECT } from 'src/actions';

const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      console.log('middleware websocket');
      // On va arrêter l'action ici, donc on ne met pas next(action)
      // On va traiter la connexion au serveur

      // grâce au script qu'on intégre dans le fichier index.html, on a accès à l'objet io
      // deuis l'objet global window. On peut donc se connecter au websocket
      const socket = window.io('http://localhost:3001');

      // on écoute les évenements que le server va nous envoyer
      // ici "on" est équivalent à addEventListener
      socket.on('server_message', (message) => {
        // ici on va stocker le nouveau message dans le state
        // donc on va dispatch une action
        console.log('message reçu du serveur', message);
      });

      // test d'envoi
      // socket.emit('client_message', {
      //   author: 'Anthony',
      //   content: 'lorem ipsum',
      // });

      break;
    }
    default:
      next(action);
  }
};

export default websocket;
