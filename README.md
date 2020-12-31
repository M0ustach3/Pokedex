# Projet Bonus de Web Orienté Mobile
## Pablo Bondia-Luttiau  ESIEA Laval

### Organisation du projet
Pour lancer mon projet, suivre cette méthodologie : 
- Se rendre dans le dossier `server/` et effectuer un `npm install` pour installer les dépendances. Régler ensuite le port d'écoute du serveur dans le fichier `index.js`. Lancer ensuite le serveur avec `npm start`. L'API en NodeJS est opérationnelle.
- Dans un autre terminal, se rendre dans `client/` et effectuer également un `npm install` pour les dépendances. Ajuster ensuite les variables `HOST`, `PROTOCOL` et `PORT` de l'API dans le fichier `src/constants.js` pour les faire correspondre à l'API. Ensuite, deux possibilités s'offrent à vous :
  - Lancer une version de développement avec `npm run serve` et se rendre sur l'adresse indiquée
  - Build le projet avec `npm run build`, puis servir les fichier présents dans le dossier `dist/` généré par la commande. Cette version est une version de production.
  
### Bonus
- J'ai déployé mon API et le frontend sur mon VPS. Vous pouvez y accéder avec les deux URL suivantes : https://apipokedex.bappo.fun/ et https://pokedex.bappo.fun/ . J'ai utilisé NginX pour servir le frontend et PM2 pour l'API.
- J'ai également réalisé une PWA. Vous pouvez tester en chargeant une première fois le site web, puis en se déconnectant d'internet, et en visitant à nouveau le site. Le site web aura été mis en cache et vous pourrez le visiter sans avoir accès à internet. Je suis en train de mettre en cache les données de l'API pour y avoir accès même en offline.
- L'application est disponible en thème sombre, ce qui est extrêmement important :relieved:
