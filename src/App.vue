<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>
<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Cadastro</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
  <RouterView />
  <HelloWorld></HelloWorld>
</template>

<style scoped>

</style>
