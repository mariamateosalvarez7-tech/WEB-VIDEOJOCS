🎮 GAMEVERSE
Descripció
GAMEVERSE és una aplicació web desenvolupada amb Vue 3 que permet consultar una col·lecció de videojocs emmagatzemats a Cloud Firestore.

L'aplicació utilitza Vue Router per a la navegació entre pàgines, components reutilitzables i Firebase per a l'emmagatzematge i desplegament.

Web publicada
🔗 https://web-videojocs.web.app

Tecnologies utilitzades
Vue 3
Vue Router
Firebase
Cloud Firestore
Vite
CSS
Instal·lació del projecte
Instal·lar les dependències:

npm install
Executar el projecte localment:

npm run dev
Generar la versió de producció:

npm run build
Desplegar a Firebase:

firebase deploy
Components propis
Navbar.vue
Mostra el menú de navegació de l'aplicació.

GameList.vue
Rep la llista de videojocs i genera les targetes de cada joc.

GameCard.vue
Mostra la informació individual de cada videojoc.

Exemple de comunicació amb props
El component pare:

GameList.vue
passa la informació de cada videojoc al component fill:

GameCard.vue
mitjançant la prop:

<GameCard :game="game" />
El component fill rep les dades utilitzant:

defineProps({
  game: Object
})
Rutes disponibles
/
Pàgina d'inici de GAMEVERSE.

/games
Mostra els videojocs llegits des de Cloud Firestore.

/about
Informació sobre el projecte i les tecnologies utilitzades.

Firestore
Col·lecció utilitzada:

games
Camps principals:

nom
genere
plataforma
imatge
Les dades es mostren a la ruta:

/games
Repositori GitHub
🔗 https://github.com/mariamateosalvarez7-tech/WEB-VIDEOJOCS

Autora
María Mateos Álvarez