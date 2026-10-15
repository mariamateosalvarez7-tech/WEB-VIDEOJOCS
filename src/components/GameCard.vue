<template>
  <div class="game-card">

    <img
      :src="game.imatge"
      :alt="game.nom"
    >

    <div class="content">
      <h3>{{ game.nom }}</h3>

      <p>
        <strong>Gènere:</strong>
        {{ game.genere }}
      </p>

      <p>
        <strong>Plataforma:</strong>
        {{ game.plataforma }}
      </p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  game: Object
})
</script>