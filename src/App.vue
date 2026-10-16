<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <RouterView />

  <footer>
    <p>WEB-VIDEOJOCS © 2026</p>
    <p>Desenvolupat amb Vue.js i Firebase</p>
  </footer>
</template>