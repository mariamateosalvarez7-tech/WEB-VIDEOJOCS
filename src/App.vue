<template>
  <Navbar />
  <RouterView />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
<template>
  <Navbar />

  <router-view />

  <footer>
    <p>WEB-VIDEOJOCS © 2026</p>
    <p>Desenvolupat amb Vue.js i Firebase</p>
  </footer>
</template>
</script>