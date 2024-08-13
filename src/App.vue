<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import './app.css'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>