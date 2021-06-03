/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { WEBSOCKET_CONNECT, SEND_MESSAGE, submitMessage } from 'src/actions';

let socket;

const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      console.log('websocket connect');
      // On va arrêter l'action ici, donc on ne met pas next(action)
      // On va traiter la connexion au serveur

      // grâce au script qu'on intégre dans le fichier index.html, on a accès à l'objet io
      // deuis l'objet global window. On peut donc se connecter au websocket
      socket = window.io('http://localhost:3001');

      // on écoute les évenements que le server va nous envoyer
      // ici "on" est équivalent à addEventListener
      socket.on('server_message', (message) => {
        // ici on va stocker le nouveau message dans le state
        // donc on va dispatch une action
        // console.log('message reçu du serveur', message);
        store.dispatch(submitMessage(message));
      });

      // test d'envoi
      // socket.emit('client_message', {
      //   author: 'Anthony',
      //   content: 'lorem ipsum',
      // });

      break;
    }
    case SEND_MESSAGE: {
      console.log('case', SEND_MESSAGE);

      // On récupère le state courant
      const state = store.getState();
      console.log('state', state);
      // ici on envoie un type d'événement "client_message", le server
      // renverra à tous les clients connectés le message + id
      socket.emit('client_message', {
        author: state.user.pseudo,
        content: state.newMessage,
      });

      // la même en destructurant
      // const { user: { pseudo: author }, newMessage: content } = store.getState();

      // socket.emit('client_message', {
      //   author,
      //   content,
      // });

      break;
    }
    default:
      next(action);
  }
};

export default websocket;
