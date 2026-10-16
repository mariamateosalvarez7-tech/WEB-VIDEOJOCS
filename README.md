# GAMEVERSE 🎮

##  Descripció

GAMEVERSE és una aplicació web desenvolupada amb Vue 3 que permet consultar una col·lecció de videojocs emmagatzemats a Cloud Firestore.

L'aplicació ofereix una interfície moderna amb navegació entre pàgines, visualització de videojocs mitjançant targetes interactives i consulta de dades emmagatzemades a Firebase.

##  Web publicada

🔗 https://web-videojocs.web.app

---

##  Tecnologies utilitzades

- Vue 3
- Vue Router
- Firebase
- Cloud Firestore
- Vite
- CSS3
- GitHub

---

##  Funcionalitats

- Navegació entre pàgines amb Vue Router.
- Consulta de videojocs des de Cloud Firestore.
- Visualització de portades dels videojocs.
- Informació detallada de cada joc.
- Mostra del gènere i plataforma.
- Sistema de puntuacions.
- Descripció personalitzada per a cada videojoc.
- Disseny responsive i modern.
- Desplegament amb Firebase Hosting.

---

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

---

##  Components principals

### Navbar.vue

Gestiona el menú de navegació entre les diferents pàgines de l'aplicació.

### GameList.vue

Rep el conjunt de videojocs i genera automàticament les targetes corresponents.

### GameCard.vue

Mostra tota la informació d'un videojoc:

- Imatge
- Nom
- Gènere
- Plataforma
- Puntuació
- Descripció

---

##  Comunicació entre components

### Component pare

```text
GameList.vue
```

### Component fill

```text
GameCard.vue
```

### Props utilitzades

```vue
<GameCard :game="game" />
```

El component fill rep les dades mitjançant:

```js
defineProps({
  game: Object
})
```

---

## 🗺️ Rutes disponibles

### /

Pàgina principal de GAMEVERSE.

### /games

Mostra els videojocs emmagatzemats a Firebase Firestore.

### /about

Mostra informació sobre el projecte i les tecnologies utilitzades.

---

##  Base de dades Firestore

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
nota
descripcio
```

### Exemple de document

```text
nom: The Legend of Zelda
genere: Aventura
plataforma: PC
nota: 9.8/10
descripcio: Explora Hyrule en una aventura èpica.
imatge: /zelda.jpg
```

---

##  Estructura del projecte

```text
src
├── components
│   ├── Navbar.vue
│   ├── GameCard.vue
│   └── GameList.vue
├── views
│   ├── HomeView.vue
│   ├── GamesView.vue
│   └── AboutView.vue
├── router
│   └── index.js
├── firebase.js
├── App.vue
└── style.css
```

---

##  Repositori GitHub

https://github.com/mariamateosalvarez7-tech/WEB-VIDEOJOCS

---

##  Autora

María Mateos Álvarez

Projecte desenvolupat amb Vue 3, Firebase i Cloud Firestore.