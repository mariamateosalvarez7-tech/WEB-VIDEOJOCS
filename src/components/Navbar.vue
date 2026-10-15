<template>
  <nav>
    <RouterLink to="/">Inici</RouterLink> |
    <RouterLink to="/games">Videojocs</RouterLink> |
    <RouterLink to="/about">Sobre</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>