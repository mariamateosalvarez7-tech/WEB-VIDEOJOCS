<template>
  <div>
    <GameCard
      v-for="game in games"
      :key="game.id"
      :game="game"
    />
  </div>
</template>

<script setup>
import GameCard from './GameCard.vue'

defineProps({
  games: Array
})
</script>