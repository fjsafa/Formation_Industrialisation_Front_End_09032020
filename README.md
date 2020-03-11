# Formation

Test

## Git

## merge recursive

git merge --no-ff --no-edit docs/git

## npm

pour node js
yarn par facebook - Pas comaptible npm et pnpm

## bower

gestion dépendances bower n'est plus utilisé, avec webpack ou yarn plus besoin

## gestion date

moment
date-fns

## Critères de choix composant

- Stat nb téléchargement par semaine
- Dépendances directs

## Doc bonnes pratiques

https://github.com/kamranahmedse/developer-roadmap
npmtrends

Bootstrap bibliothèque et non pas framework

## Server local

npm i live-server -g
npx live-server
live-server
npm i live-server -D
.\node_modules\.bin\live-server

## automatisation server local

npm i live-server -D
ça rajoute automatiquement dans package.json
"devDependencies": {
"live-server": "^1.2.1"
},
dans package.json
"scripts": {
"serve" : "live-server src --mount=/node_modules:node_modules"
}
}
puis npm run serve

## Install prettier pour tous les dev

npm i prettier -D
On peux configurer dans package.json des paramètres pour tous les devs

## Flex box

margin left auto ml-auto
flexbox froggy
justify-content:left

## VsCode shortcuts

.container>div.col\*3>lorem
Emet.io

#modale
data-togglet dan button

cloud fare cdn?

## verify html html

npm i htmlint -D

## verify css

stylelint

## verify javascript

jslint

## git post pre commit

npm i husky -D

## install lint-staged; mrm permet la configuration package.json aussi

# npx mrm lint-staged

## Git

## merge recursive

git merge --no-ff --no-edit docs/git
git log --oneline --all --graph

## sass

npm i node-sass -D
"build:scss": "node-sass --recursive --output src/css src/scss --output-style compressed",
// "build:scss": "node-sass --recursive --output src/css src/scss --output-style compressed",
// "watch:scss": "nodemon --ext scss --exec npm run build:scss"

## Pour que le site soit rafraichie automatiquement

npm i nodemon -D

## site cani user pour chaque navigator

## Méthodologie css

BEM

## Guides pratique js

standard js
aibnb https://github.com/airbnb/javascript
Google javascript

## pour qu'import export soit asynchrone

## Il met tout dans les mêmes fichiers

## financés par des dons 500K par an!

https://webpack.js.org/
npm i webpack webpack-cli -D

## a la mode

css grid
flex box

## Pour builder la partie html

npm i html-webpack-plugin -D

## webpackdev server pour builder et lancer le serveur

builder les fichier en ram
pour que ça soit plus rapide
npm i webpack-dev-server -D
