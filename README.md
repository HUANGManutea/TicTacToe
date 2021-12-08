# TicTacToe

Ce projet est un POC de TicTacToe, en ligne, multijoueur, avec micro-transactions, qui se base sur:

- [boardgame.io](https://boardgame.io/)
- [Next.js](https://nextjs.org/)
- [Payzen by OSB](https://www.osb.pf/nos-produits/)

Disclaimer:

Je fais ce projet pour montrer un exemple d'intégration de moyen de paiement en ligne, en faisant celà, j'espère aider les développeurs locaux à monétiser leur application, point important, Payzen permet d'accepter les cartes locales.

Au moment où je fais ce projet, je n'ai pas connaissance de jeux polynésiens qui intègrent des moyens de paiements en ligne qui permettent d'utiliser des cartes locales.

Il existe d'autre moyens de paiement en ligne qui permettent d'utiliser des cartes locales, mais je ne les ai pas encore expérimenté.

Si vous voulez forker ce projet pour y metre votre moyen de paiement (qui accepte les cartes locales), je vous invite vonlontiers à le faire. Cela ne sera que plus bénéfique pour les développeurs locaux.

Enfin, je suis conscient que montrer comment faire un projet de jeu avec micro-transactions, c'est comme ouvrir la porte des enfers, mais bon j'avais aussi envie de faire un jeu et les micro-transactions c'est ce qui m'est venu en premier à l'esprit. Je m'excuse et me dédouane complètement d'une éventuelle vague de jeux à micro-transactions.

NOTE TRES IMPORTANTE:

Au moment où je fais ce projet, je travaille à OSB, mais OSB n'a pas connaissance de ce projet.

Ce projet n'est pas à l'initiative d'OSB.

Ce projet n'est pas la propriété d'OSB.

# Installation

- [installer nodejs + npm](https://nodejs.org/en/)

- cloner ce repo
```
git clone https://github.com/HUANGManutea/TicTacToe.git
```

- installer les dépendances
```
cd TicTacToe
npm install
npm install esm
```

- lancer le serveur (terminal 1)
```
npm run serve
```

- lancer le client (terminal 2)
```
npm run dev
```

# Comment jouer en local

Ouvrez 2 fois votre navigateur et allez sur la page http://localhost:3000.

L'une des 2 fenêtre sera pour le joueur 1, il devra cliquer sur le bouton "Player 1".

L'autre est pour le joueur 2, il devra cliquer sur le bouton "Player 2".

# Monétisation

TODO