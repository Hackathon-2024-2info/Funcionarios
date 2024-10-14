<script setup></script>


<template>
    <main>
    <header>
        <p>Olá, Edson!</p>
        <img src="../assets/foto-perfil.png" alt="">
    </header>
</main>
</template>

<style scoped>


header {
    display: flex;
    margin-left: 18%;
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
</style>