<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>

  <body>
    <div class="menu-sm">
      <header>
        <h1>Olá, Edson!</h1>
        <img src="../assets/Group 37322.png" alt="">
    
      </header>
      <nav>
        <div class="menu">
        <div class="container-nav">
          <div>
            <button class="dropdown-btn" @click="toggleDropdown">
              <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
              </div>
            </button>
          </div>
          <div class="nav">

          </div>
        </div>
          <div class="dropdown-content" v-if="isOpen">
            <a><router-link to="/estoque"> Estoque </router-link></a>
            <hr>
            <a><router-link to="/servicos/1"> Serviço </router-link></a>
            <hr>
            <a><router-link to="/relatorios"> Relatório </router-link></a>
          </div>
        </div>
      </nav>
    </div>

    <div class="menu-lg">
      <nav>
        <img src="../assets/logo AVANTE.png" alt="" class="img" />

        <router-link to="/estoque"> Estoque </router-link>
        <router-link to="/servicos/1"> Serviço </router-link>
        <router-link to="/relatorios"> Relatório </router-link>

        <div class="vazio"></div>

        <img src="../assets/Question.png" alt="" class="warning" />
        <div class="box">
          <p class="title">Abra um chamado</p>
          <p class="frase-box">Dúvidas ou problemas, abra um chamado ao administrador.</p>
          <router-link to="/solicitarchamado" style="background: none;"><button class="button" id="chamado"><p style="margin-top: 3%; background: white; border-radius: 10px; padding: 5%; padding-top: 5%; padding-bottom: 5%;">Abrir chamado</p></button></router-link>
        </div>
      </nav>
    </div>
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

body {
  background: #f5f5f5;
  margin-top: -10%;
}

@media only screen and (min-device-width: 601px) {
  .menu-sm {
    display: none;
  }
  
.title{
padding-top: 25%;
}
  nav a {
      position: relative;
      display: block;
      padding: 4px 0;
      color: #ecf0f1;
      text-decoration: none;
      transition: 0.7s;

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 15px;
        width: 80%;
        height: 3px;
        background: gray;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.7s;
      }

      &:hover {
        color: #95a5a6;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }

  .box {
    background-color: #384dbb;
    color: white;
    font-weight: 400;
    border-radius: 10px;
    margin-left: 10%;
    margin-right: 10%;

    padding-top: -15%;
  
  }

  .warning {
    margin-bottom: -10%;
  }

  .menu-lg {
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
    color: #000;
    border: none;
    border-radius: 20px;
    width: 70%;
    height: 6%;
    padding-top: 5%;
    padding-bottom: 5%;
    font-size: 14px;
    font-weight: 600;
    margin: 9%;

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
    background: none;
    border-radius: 10px;
    padding-top: 20%;
    padding-bottom: 20%;
    width: 85%;
    border: none;
display: block;
margin: 0 auto;
    color: #546fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
  
    margin-top: -3% !important;
    margin-bottom: -15%;
  }

  .title {
    font-size: 100%;
    text-align: center;
    font-family: 'Kantumruy Pro', sans-serif;
   
  }

  .barra {
    display: grid;
    grid-template-columns: 18% 1fr;
  }
}

@media only screen and (min-device-width: 1500px) {
  .menu-sm {
    display: none;
  }

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


  .menu-lg {
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
    color: #000;
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
  margin-top: 15%;
  }
}

@media only screen and (max-device-width: 600px) {
  .menu-lg {
    display: none;
  }


  header {
    background: rgba(217, 217, 217, 0.38);
    padding-top: 8%;
    padding-bottom: 8%;
    padding-left: 10%;
    font-family: 'Readex Pro';
    display: flex;
  }

  h1{
     font-weight: 600;
  }

  body {
    width: 100%;
  }

  .menu {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    position: absolute;
    background-color: #180577;

    min-width: 500%;
   
  }

  .dropdown-content a {
    color: white;
    padding: 2%;

    text-align: center;
    text-decoration: none;
    display: block;
    font-weight: 600;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
    color: black;
margin-left: -3.69%;
    width: 209px;

    padding-right:15px;
  }

  .dropdown-content {
    display: block;
    font-family: 'Plus Jakarta Sans';
    padding-left: 20%;
    padding-right: 20%;
    width: 209px;
  }

  hr{
padding-left: 103%;
padding-right: 50%;
margin-left: -50%;
  }

  .line1{
    width: 25px;
    height: 2px;
    background: #fff;
    margin: 8px;
    transition: 0.3s;
  }

  .line2{
    width: 15px;
    height: 2px;
    background: #fff;
    margin: 8px;
    transition: 0.3s;
  }

  .line3{
    width: 25px;
    height: 2px;
    background: #fff;
    margin: 8px;
    transition: 0.3s;
  }

  .mobile-menu {
    display: block;
    padding-left: 50%;
    padding-top: 10%;
  }

  .nav-list.active {
    transform: translateX(0);
  }

  .dropdown-btn {
    background: #180577;
    border: none;
    max-width: fit-content;
  }

  .container-nav{
    display: flex;
  }

  nav{
    background-color: #180577;
  }

img{
  margin-left: 30%;

}
}
</style>