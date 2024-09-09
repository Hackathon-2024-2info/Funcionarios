<script setup>
import { reactive, ref } from 'vue'
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
  <div class="formularioo">
    <h1>Faça seu cadastro</h1>
    <form class="formulario" @submit.prevent="processarForm">
      <label for="">Crie seu usuário</label>
      <input type="text" v-model="info.usuario" required />
      <label for="">Crie sua senha</label>
      <input type="password" v-model="info.senha" required />
      <label for="">Confirme sua senha</label>
      <input type="password" v-model="info.confisenha" required />
      <label for="">Seu nome</label>
      <input type="text" v-model="info.nome" required />
      <label for="">Insira seu email</label>
      <input type="email" v-model="info.email" required />
      <label for="">Insira seu telefone</label>
      <input type="number" v-model="info.telefone" required />
      <label for="">Insira sua matrícula</label>
      <input type="number" v-model="info.matricula" required />
      <button id="enviar" type="submit">Concluir</button>
    </form>
  </div>
  <div class="containerA">
    <img class="logo" src="../assets/logo AVANTE.png" alt="">
    <p class="bemvinde">SEJA BEM-VINDO!</p>
    <p class="conta">Faça seu cadastro para ter acesso ao sistema </p>
    <div class="voltar">
      <p>Voltar a página de login</p>
    </div>
  </div>


  <!-- Futuramente pra mandar pro banco aqui!!!! -->
  <div v-if="mostrarResultado" class="resultado">
    <p>Cadastro concluído!</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');


.containerA {
  position: absolute;
  width: 539px;
  height: 100.7%;
  left: 64.4%;
  top: -5px;
  background: #0F0541;
  margin: 0px;
}

.logo {
  display: flex;
  position: absolute;
  width: 200px;
  height: 200px;
  left: 170px;
  top: 150px;
}


.bemvinde {
  display: flex;
  position: absolute;
  height: 30px;
  left: 125px;
  top: 300px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
  margin-top: 100px;
}


.conta {
  /* Ainda não tem uma conta? */
  display: flex;
  position: absolute;
  height: 28px;
  left: 110px;
  top: 541px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;

}

.voltar {
  display: flex;
  font-family: 'Karla';
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 40px;
  gap: 10px;
  width: 230px;
  position: absolute;
  left: 141px;
  right: 1042px;
  top: 644px;
  bottom: 340px;
  background: #091D87;
  border-radius: 5px;


}


.voltar p {
  color: #FFFFFF;
}
</style>
