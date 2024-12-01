<script setup>

// import { useAuthStore } from '@/stores/auth';
// const authStore = useAuthStore()

</script>


<template>
    <main>
    <header>
        <h1 class="block-effect" style="--td: 0.9s">
  <div class="block-reveal" style="--bc: rgba(217, 217, 217, 1); --d: 0.25s">Olá, Edson!</div>
</h1>
        <RouterLink to="/perfil"><img src="../assets/foto-perfil.png" alt=""></RouterLink>
    </header>
</main>
</template>

<style scoped>
@media only screen and (min-device-width: 601px){

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}


/* other */
.info {
  margin: 20px 0;
  text-align: center;
}


/* block-$ */
.block-effect {
  font-size: calc(8px + 2.5vw);
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 1s var(--t) forwards;
  border-radius: 5px 5px 5px 5px;
}

.block-reveal::after {
  content: '';

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
}


/* animations */
@keyframes revealBlock {
  100% {
    color: #0f0f0f;
  }
}

@keyframes revealingIn {

  0% {
    width: 0;
    opacity: 100%;
  }

  100% {
    width: 100%;
    opacity: 100%;
  }
}

@keyframes revealingOut {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }

}


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

h1 {
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
  img:hover{
    scale: 1.05;
    border-radius: 60%;    
    background-color: rgb(99, 99, 245);
  }
}

@media only screen and (max-device-width: 600px){
    *{
        display: none;
    }
}
</style>