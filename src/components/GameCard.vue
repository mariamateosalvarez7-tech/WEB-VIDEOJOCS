<template>
  <div>
    <h3>{{ game.nom }}</h3>
    <p>Gènere: {{ game.genere }}</p>
    <p>Plataforma: {{ game.plataforma }}</p>
  </div>
</template>

<script setup>
defineProps({
  game: Object
})
</script>