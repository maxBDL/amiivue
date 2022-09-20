# ECF - Vue.Js - DWWM St Just

Objectif: partir d'une maquette statique et d'en faire un projet vue.js  qui sollicite une api externe.


# Le front

Installez toutes les dépendances nécessaires pour avoir une vue au plus près de la maquette html/css 
Découpez ensuite votre projet en composants vue 

> Sur l'index vous pouvez par exemple choisir d'afficher 3 amiibo au
> hasard ou vos trois amiibo préférés

# L'api

L'api publique permet de récupérer des infos sur des "amiibo", des petites figurines Nintendo.
[La documentation de l'api](https://www.amiiboapi.com/docs/) 
Il y a deux endpoints importants: récupérer une liste d'amiibo et récupérer les détails d'un amiibo 
**Récupérer tous les amiibos** 
[https://www.amiiboapi.com/api/amiibo/](https://www.amiiboapi.com/api/amiibo/)
📌L'id des amiibo est le "tail" 
[https://www.amiiboapi.com/api/amiibo/?tail=01610502](https://www.amiiboapi.com/api/amiibo/?tail=01610502)

## Grille

J'évalue l'ensemble du projet, la récupération des datas, la structure du projet et la qualité du code
Il vaut mieux un projet qui build qu'un projet très propre mais qui ne compile pas 