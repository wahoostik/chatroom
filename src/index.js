/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// Pour le store, il faut importer le composant Provider de react-redux
// Il va englober toute l'application
import { Provider } from 'react-redux';

// == Import : local
// Composants
import Chatroom from 'src/containers/Chatroom';
import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Chatroom />;
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
