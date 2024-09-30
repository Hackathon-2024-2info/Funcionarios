<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="containerA">
      <div class="img">
        <img class="logo" src="../assets/logo AVANTE.png" alt="" />
      </div>
      <p class="bemvinde">SEJA BEM-VINDO!</p>
      <p class="conta">Faça seu cadastro para ter acesso ao sistema</p>
      <RouterLink to="/">
      <button id="voltar">Voltar a página de login</button></RouterLink>
    </div>
</template>

<style scoped>
    
    #main {
  display: grid;
  grid-template-columns: 70% 30%;
  margin-left: 0;
}

aside {
  margin-top: -5%;
  margin-left: 25%;
}

.formularioo {
  display: grid;
  grid-template-columns: 25% 1fr 25%
}

.faca {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
  text-align: center;
  margin-top: 10%;
  margin-left: -40%;
  white-space: nowrap;
  margin-bottom: 5%;

}

.containerA {
  background-color: #0F0541;
  height: 125vh;
  width: 100%;
}

#enviar {
  margin-left: 70%;
}

.img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: flex;
  margin-top: 30%;
  align-items: center;
  align-self: center;
}

.bemvinde {
  font-family: 'Readex Pro';
  font-size: 32px;
  color: white;
  margin-left: 24%;
  margin-top: 1%;
  font-weight: 500;
}

.conta {
  font-family: 'Karla';
  color: white;
  font-weight: 120;
  font-size: 150%;
  text-align: center;
  margin-top: 10%;
  padding-left: 20%;
  padding-right: 20%;
  
}


input {
  width: 578px;
  height: 46px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  margin: 0;
  margin-bottom: 5%;

}

label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: block;
  margin-bottom: 5%;
  white-space: nowrap;
}

button {
  margin: 0 30% 0 30%;
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  display: inline;
  padding: 15px 40px;
  gap: 10px;
  width: 230px;
  font-size: 16px;
  color: white;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: none;
  white-space: nowrap;
}

#voltar {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 13%;

}
</style>



