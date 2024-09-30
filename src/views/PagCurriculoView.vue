<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ArchiveInput from '@/components/ArchiveInput.vue';

const cargos=[
 {nome: "eletrecista", id:1},
 {nome: "técnico em manutenção hidráulica", id:2},
 {nome: "mecânico de manutenção", id:3},
 {nome: "técnico em eletrônica", id:4},
 {nome: "auxiliar de manutenção", id:5},
 {nome: "técnico em manutenção", id:6},
 {nome: "auxiliar administrativo", id:7},
 {nome: "supervisor de manutenção", id:8},






]
</script>

<template>
  <main id="main">

    <aside id="container" class="espacamento">
      <label for="">SEU NOME</label>
      <input type="text" placeholder="Insira seu nome completo">
      <label for="">SELECIONE O CARGO</label>
      <select v-model="cargos.nome">
          <option disabled value="">Selecione o cargo que deseja se candidatar</option>
          <option v-for="cargo in cargos" :key="cargo.id" :value="cargo.nome">
            {{ cargo.nome }} </option>
        </select>
    <ArchiveInput />
        <!-- <fieldset class="arquivo">
          <img src="@/assets/iconimage.png" alt="" id="imagelogo">
          <h6>INSIRA SEU CURRÍCULO</h6>
          <h4>Insira o arquivo do seu currículo</h4>
        </fieldset> -->
</aside>

<section>
      <div class="img">
        <img class="logo" src="../assets/logo AVANTE.png" alt="" />
      </div>

      <h1>SEJA BEM-VINDO!</h1>
      <p class="pergunta">Faça seu cadastro para ter acesso ao sistema</p>
      <RouterLink to="/about"><button id="enviar" type="submit">Ir à página de cadastro</button></RouterLink>
    </section>


  </main>
</template>

  <style scoped>

  .espacamento{
    margin-top: 15%;
  }


  select{
    background: rgba(217, 217, 217, 0.43);
    width: 588px;
    height: 46px;
    border-radius: 5px;
    border-style: none;
    padding-left: 2%;

  }

  option{
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    color: #555555;
    margin-top: 6%;
    margin-bottom: 1%;

  }

  h4{
    font-size: 12px;
    color: #555555;
    font-family: 'Karla';
    font-weight: 300;
    padding-left: 20%;
  }

  #imagelogo{
    width: 34px;
    height: 34px;
    padding: 3%;
  }
  .arquivo{
      width: 50%;
      height: 6vh;
      background-color: #D9D9D9;
      border-radius: 20px;
      border-color: rgba(217, 217, 217, 0.43);
      margin-top: 10%;
      display: grid;
      place-self: center;
      grid-template-rows: 20% 40% 20%;
    }

    h6{
      font-family: 'Karla';
      font-size: 16px;
      color: #091D87;
      font-weight: 400;
      padding-left: 20%;
    }
    
    
    
    
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      display: grid;
      grid-template-columns: 25% 1fr 25%;
      place-items: center;
    }

    .pergunta {
      margin-top: 3rem;
      font-size: 22px;
      width: 60%;
      font-weight: 300;
      padding-right: 18%;
      padding-left: 18%;

    }

    #main {
      display: grid;
      grid-template-columns: 70% 30%;
    }

    #h1 {
      color: #000000;
      font-size: 36px;
      margin-top: 15%;
    }

    h1 {
      font-family: 'Readex Pro';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      color: #FFFFFF;
      text-align: center;
      margin-top: 2%;
    }

    .logo {
      display: flex;
      margin-top: 30%;
      align-items: center;
      align-self: center;
    }

    input {
      width: 578px;
      height: 46px;
      background: rgba(217, 217, 217, 0.43);
      border-radius: 5px;
      border: none;
      margin: 0;
      padding-left: 2%;

    }

    label {
      font-family: 'Karla';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      color: #000000;
      text-align: center;
      margin-top: 6%;
      margin-bottom: 1%;

    }

    button {
      margin: 0 30% 0 30%;
      background-color: #091D87;
      border-radius: 5px;
      font-family: 'Karla';
      display: inline;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 15px 40px;
      gap: 10px;
      width: 230px;
      font-size: 16px;
      color: white;
      margin-top: 3rem;
      border: none;
      text-align: center;
    }

    section {
      background: #0f0541;
      height: 100vh;
      width: 100%;
    }

    aside {
      margin: 5%;
      display: grid; 
      place-content: center;
    }

    .bemvindo,
    .conta,
    p {
      color: white;
    }

    .bemvindo {
      font-family: 'Readex Pro';
      font-size: 32px;

    }

    .congmta,
    p {
      font-family: 'Karla';
    text-align: center;
  }
</style>