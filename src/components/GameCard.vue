<template>
  <div class="game-card">
    <h3>{{ game.nom }}</h3>
    <p><strong>Gènere:</strong> {{ game.genere }}</p>
    <p><strong>Plataforma:</strong> {{ game.plataforma }}</p>
  </div>
</template>

<script setup>
defineProps({
  game: Object
})
</script>