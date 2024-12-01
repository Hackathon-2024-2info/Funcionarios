<script setup>

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()

</script>


<template>
    <main>
    <header>
        <p>Olá, Edson!</p>
        <RouterLink to="/perfil"><img src="../assets/foto-perfil.png" alt=""></RouterLink>
        <button @click="authStore.toggleAdmin">trocar p admin</button>
    </header>
</main>
</template>

<style scoped>
@media only screen and (min-device-width: 601px){
main{
    padding-bottom: 10%;
}

header {
    display: flex;
    margin-left: 20%;
    position: absolute;
    width: 82%;
    height: 18vh;
    background-color: #D9D9D9;
}

p {
    position: absolute;
    left: 74px;
    top: calc(50% - 43px/2 - 0.5px);
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
}

img {
    position: absolute;
    display: flex;
    margin-left: 88%;
    top: calc(50% - 43px/2 - 0.5px);
}
}
@media only screen and (max-device-width: 600px){
    *{
        display: none;
    }
}
</style>