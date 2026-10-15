<template>
  <div>
    <h1>Videojocs</h1>

    <p v-if="loading">Carregant videojocs...</p>

    <p v-else-if="error">
      Error carregant les dades.
    </p>

    <p v-else-if="games.length === 0">
      No hi ha videojocs disponibles.
    </p>

    <GameList v-else :games="games" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import GameList from '../components/GameList.vue'

const games = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'games'))

    games.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>
``