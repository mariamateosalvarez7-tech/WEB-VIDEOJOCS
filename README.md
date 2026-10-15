# GAMEVERSE 🎮 

##  Descripció

GAMEVERSE és una aplicació web desenvolupada amb Vue 3 que permet consultar una col·lecció de videojocs emmagatzemats a Cloud Firestore.

L'aplicació utilitza Vue Router per a la navegació entre pàgines, components reutilitzables i Firebase per a l'emmagatzematge i desplegament.



##  Web publicada

🔗 https://web-videojocs.web.app



##  Tecnologies utilitzades

- Vue 3
- Vue Router
- Firebase
- Cloud Firestore
- Vite
- CSS



##  Instal·lació del projecte

### Instal·lar dependències

```bash
npm install
```

### Executar localment

```bash
npm run dev
```

### Generar la versió de producció

```bash
npm run build
```

### Desplegar a Firebase

```bash
firebase deploy
```



##  Components propis

### Navbar.vue

Mostra el menú de navegació de l'aplicació.

### GameList.vue

Rep la llista de videojocs i genera les targetes de cada joc.

### GameCard.vue

Mostra la informació individual de cada videojoc.



##  Exemple de comunicació amb props

### Component pare

`GameList.vue`

### Component fill

`GameCard.vue`

### Dades que es passen

```vue
<GameCard :game="game" />
```

El component fill rep les dades mitjançant:

```js
defineProps({
  game: Object
})
```



##  Rutes disponibles

### /

Pàgina principal de GAMEVERSE.

### /games

Mostra els videojocs emmagatzemats a Cloud Firestore.

### /about

Mostra informació sobre el projecte i les tecnologies utilitzades.



##  Firestore

### Col·lecció utilitzada

```text
games
```

### Camps principals

```text
nom
genere
plataforma
imatge
```

### Vista que mostra les dades

```text
/games
```



## 🔗 Repositori GitHub

https://github.com/mariamateosalvarez7-tech/WEB-VIDEOJOCS



##  Autora

María Mateos Álvarez