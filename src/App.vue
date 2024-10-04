<script setup>
import { RouterLink, RouterView } from 'vue-router'

import './assets/main.css'
import EstoqueView from './views/EstoqueView.vue';
</script>
<template>
   
  <RouterView />
  <HomeView></HomeView>
  <EstoqueView></EstoqueView>
</template>

<style scoped>

</style>
