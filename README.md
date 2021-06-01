# Chatroom avec React, Redux, Express et Socket.io

Une application de chat codé en React avec Redux, connectée à un server Express et Socket.io.
Projet réalisé lors de ma formation Fullstack Javascript au sein de l'école O'clock.

## Lancer le projet

Télécharger ou cloner le repos.

### Prérequis

* Avoir installé Node sur sa machine (voir [la doc](https://nodejs.org/en/docs/) pour un guide d'installation complet).
* Avoir installé Yarn sur sa machine (voir [la doc](https://yarnpkg.com/getting-started/install) pour un guide d'installation complet).

### Installer le projet

Lancer la commande yarn pour installer les dépendances nécessaires au fonctionnement du projet.
`yarn`

Lancer la commande yarn server pour lancer le serveur. Le serveur se lance sur le port 3001.
- start server `yarn server` : http://localhost:3001

Puis lancer la commande yarn start pour lancer le projet. Le chat se lance sur le port 3200.
- start chat `yarn start`

Routes :
- `POST http://localhost:3001/login`

    => fournir un objet contenant email et password, par exemple 
    ```
    {
        email: 'walter.white@breakingbad.com',
        password: 'heisenberg'
    }
    ```

   Identifiants valides :
   - walter.white@breakingbad.com/heisenberg
   - lebron.james@nba.com/number23


- `POST http://localhost:3001/forgot`
- `GET http://localhost:3001/theme/{email}`


### Codé avec

* React
* Redux
* SCSS
* Express
* Socket.io

### Remerciements

Merci à l'école O'Clock ainsi que ses formateurs/professeurs.

### License

This project is licensed under the MIT License.
