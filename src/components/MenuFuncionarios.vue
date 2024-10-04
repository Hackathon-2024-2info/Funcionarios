<script setup></script>

<template>
  <div class="menu">
    <nav>
      <img src="../assets/logo AVANTE.png" alt="" class="img" />
  <router-link to="/about" >
        Estoque
      </router-link>
      <router-link to="/servicos" >
        Servico
      </router-link>
      <router-link to="/relatorios">
        Relatório
      </router-link>

      <div class="vazio"></div>

      <img src="../assets/Question.png" alt="" class="warning" />
      <div class="box">
        <p class="title">Abra um chamado</p>
        <p class="frase-box">Dúvidas ou problemas, abra um chamado ao administrador.</p>
        <button class="button">Abrir chamado</button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');


.menu {
  display: grid;
  grid-template-columns: 18% 1fr;
}
template {
  margin: 0;
  height: 100%;
}
nav {
  height: 100%;
  margin: 0;
  padding-bottom: 15%;
  background: #0f0541;

  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
}

.img {
  width: 17vh;
  height: 17vh;
  margin-top: 10%;
}
img {
  display: grid;
  place-items: center;
  position: relative;
}

nav a {
    text-decoration: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: white;
    color:#000;
    border: none;
    border-radius: 20px;
    width: 70%;
    height: 6%;
    padding-top: 5%;
    padding-bottom: 5%;
    font-size: 14px;
    font-weight: 600;
    margin: 4vh;

    display: flex;
    justify-content: center;
}

nav a.active,
nav a.exact-active {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #384dbb;
  border-radius: 10px;
  border: none;
  width: 85%;

  color: white;

  font-size: 90%;
  font-weight: 600;
  margin: 4vh;
  padding-top: 5%;
  padding-bottom: 5%;
}

.vazio {
  padding: 75%;
}
.btn-branco {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: white;
  border: none;
  border-radius: 20px;
  width: 70%;
  height: 6%;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 14px;
  font-weight: 600;
  margin: 4vh;
}
.frase-box {
  font-size: 80%;
  margin: 10%;
  text-align: center;
  font-family: 'Karla';
  margin-top: 15%;
}

.button {
  border-radius: 10px;
  height: 15%;
  width: 85%;
  border: none;

  text-align: center;
  place-items: center;
  color: #546fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-left: 7%;
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 3%;
}

.title {
  font-size: 100%;
  text-align: center;
  font-family: 'Kantumruy Pro', sans-serif;
  margin-top: 35%;
}

@media only screen and (max-device-width: 1500px) {
    
.box {

background-color: #384dbb;
color: white;
font-weight: 400;
border-radius: 10px;
margin-left: 10%;
margin-right: 10%;
height: 60%;
margin-top: -15%;
padding-bottom: 10%;
}

.warning {
  margin-bottom: -10%;
}
}

@media only screen and (max-device-width: 2000px) {
    
    .box {
    
    background-color: #384dbb;
    color: white;
    font-weight: 400;
    border-radius: 10px;
    margin-left: 10%;
    margin-right: 10%;
    height: 60%;
    margin-top: -8%;
    padding-bottom: 10%;
    }
    
    .warning {
      margin-bottom: -13%
    }
    }
    
</style>
