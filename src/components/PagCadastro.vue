<script setup>
import { reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const mostrarResultado = ref(false)
const info = reactive({
  nome: '',
  email: '',
  senha: '',
  confisenha: '',
  usuario: '',
  telefone: '',
  matricula: ''
})

function processarForm() {
  if (
    info.senha == info.confisenha &&
    info.email.includes('@') &&
    info.senha.length >= 6 &&
    info.usuario.length >= 4
  ) {
    mostrarResultado.value = !mostrarResultado.value
  }
}

// function verifSenha() {
//   if (info.senha == "") {
//     return 'O campo não foi preenchido'
//   }
//   else if(info.senha.length<6) {
//     return 'A senha precisa ter no mínimo 6 caracteres'
//   }
// }
</script>

<template>

  <div class="sm"><main id="main">
    <div class="containerA">
      <div class="img">
        <img class="logo" src="../assets/logo AVANTE.png" alt="" />
      </div>
      <p class="bemvinde">SEJA BEM-VINDO!</p>
      <p class="conta">Faça seu cadastro para ter acesso ao sistema</p>
      <RouterLink to="/">
      <button id="voltar">Voltar a página de login</button></RouterLink>
    </div>

    <aside>
      <h1 class="faca">Faça seu cadastro</h1>
      <div class="formularioo">
        <form class="formulario" @submit.prevent="processarForm">
          <label for="">CRIE SEU USUÁRIO</label>
          <input type="text" v-model="info.usuario" required placeholder="Insira um usuário" />
          <label for="">CRIE SUA SENHA</label>
          <input type="password" v-model="info.senha" required placeholder="Insira uma senha" />
          <label for="">CONFIRME SUA SENHA</label>
          <input type="password" v-model="info.confisenha" required placeholder="Confirme sua senha" />
          <label for="">SEU NOME</label>
          <input type="text" v-model="info.nome" required placeholder="Insira seu nome" />
          <label for="">INSIRA SEU E-MAIL</label>
          <input type="email" v-model="info.email" required placeholder="Insira seu e-mail" />
          <label for="">INSIRA SEU TELEFONE</label>
          <input type="number" v-model="info.telefone" required placeholder="Insira seu telefone" />
          <label for="">INSIRA SUA MATRICULA</label>
          <input type="number" v-model="info.matricula" required placeholder="Insira seu número de matrícula" />
          <button id="enviar" type="submit">Concluir</button>
        </form>
      </div>
    </aside>
    
    <!-- Futuramente pra mandar pro banco aqui!!!! -->
    <!-- <div v-if="mostrarResultado" class="resultado">
    <button>Cadastro concluído!</button>
  </div> -->
  </main></div>
  
  <div class="lg"><main id="main">
    <aside>
      <h1 class="faca">Faça seu cadastro</h1>
      <div class="formularioo">
        <form class="formulario" @submit.prevent="processarForm">
          <label for="">CRIE SEU USUÁRIO</label>
          <input type="text" v-model="info.usuario" required placeholder="Insira um usuário" />
          <label for="">CRIE SUA SENHA</label>
          <input type="password" v-model="info.senha" required placeholder="Insira uma senha" />
          <label for="">CONFIRME SUA SENHA</label>
          <input type="password" v-model="info.confisenha" required placeholder="Confirme sua senha" />
          <label for="">SEU NOME</label>
          <input type="text" v-model="info.nome" required placeholder="Insira seu nome" />
          <label for="">INSIRA SEU E-MAIL</label>
          <input type="email" v-model="info.email" required placeholder="Insira seu e-mail" />
          <label for="">INSIRA SEU TELEFONE</label>
          <input type="number" v-model="info.telefone" required placeholder="Insira seu telefone" />
          <label for="">INSIRA SUA MATRICULA</label>
          <input type="number" v-model="info.matricula" required placeholder="Insira seu número de matrícula" />
          <button id="enviar" type="submit">Concluir</button>
        </form>
      </div>
    </aside>
    <div class="containerA">
      <div class="img">
        <img class="logo" src="../assets/logo AVANTE.png" alt="" />
      </div>
      <p class="bemvinde">SEJA BEM-VINDO!</p>
      <p class="conta">Faça seu cadastro para ter acesso ao sistema</p>
      <RouterLink to="/">
      <button id="voltar">Voltar a página de login</button></RouterLink>
    </div>

    <!-- Futuramente pra mandar pro banco aqui!!!! -->
    <!-- <div v-if="mostrarResultado" class="resultado">
    <button>Cadastro concluído!</button>
  </div> -->
  </main></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

@media screen and (min-width: 769px){
  .sm{
    display: none;
  }
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
  cursor: pointer;
  transition: border-color 0.3s ease; 
}
input:focus {
  border: 2px solid blue;
  border-color: #091D87; 
  outline: none; 
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
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: transform 0.1s ease; 
}
button:active {
  transform: scale(0.95); 
}

#voltar {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 13%;

}
}
@media screen and (max-width: 768px) {

.lg{
  display: none;
}

img{
  width: 117px;
  height: 112px;
  display: block;
  margin: 0 auto;
  padding-top: 8%;
  padding-bottom: 2%;
}
}

.containerA{
  background-color: #0F0541;
  color: white;
  text-align: center;
  height: 350px;
  font-family: 'Readex Pro';
}
.bemvinde{
  font-size: 25px;
  text-align: center;
}

.conta{
  font-family: 'Karla';
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  margin-top: 4%;
  margin-bottom: 5%
}

#voltar{
  background-color: #091D87;
border-radius: 5px;
border: none;
color: white;
padding: 3%;
font-family: 'Karla';
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
}

.faca{
  font-size: 20px;
  text-align: center;
  font-family: 'Readex Pro';
  font-weight: 400;
  margin-top: 10%;
  margin-bottom: 10%;
}

input{
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;

}
input{
  width: 320px;
  height: 46px;
  border: none;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.43);
}
input{
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;

width: 320px;
height: 46px;

background: rgba(217, 217, 217, 0.43);
border-radius: 5px;
margin-bottom: 8%;
margin-top: 5%;
}

label{
  font-family: 'Readex Pro';
  font-weight: 300;
 
}

.formularioo{
  display: block;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#enviar{
  background-color: #091D87;
border-radius: 5px;
padding: 3% 7% 3% 7%;
border: none;
color: white;

font-family: 'Karla';
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  text-align: center;
  display: block;
  margin: 0 auto;

  margin-bottom: 5%
}
</style>

