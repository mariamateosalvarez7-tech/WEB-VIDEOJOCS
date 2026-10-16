<template>
  <div class="game-card">

    <img
      :src="game.imatge"
      :alt="game.nom"
    >

    <div class="content">

      <h3>{{ game.nom }}</h3>

      <p class="rating">
        ⭐ {{ game.nota }}
      </p>

      <p>
        <strong>Gènere:</strong>
        {{ game.genere }}
      </p>

      <p>
        <strong>Plataforma:</strong>
        {{ game.plataforma }}
      </p>

      <p>
  <strong>Nota:</strong>
  {{ game.nota }}
</p>

<p class="description">
  {{ game.descripcio }}
</p>

    </div>

  </div>
</template>