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


.formularioo {
  display: flex;
  justify-content: center;
  width: 120%;
  margin-left: -26%;
}

.faca {
  display: flex;
  top: 10%;
  margin-left: 26%;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
}

.containerA {
  position: absolute;
  width: 29.15%;
  height: 100%;
  left: 70.85%;
  top: 0%;
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

input {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  height: 4.5%;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  margin-bottom: 4.5%;
}

label {
  display: flex;
  flex-direction: row;
  width: 578px;
  height: 10px;
  left: 273px;
  right: 851px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #000000;
 padding-bottom: 3%;
}

#enviar {
  font-family: 'Karla';
  display: flex;
  padding: 2% 20%;
  background: #091D87;
  border-radius: 5px;
  color: #FFFFFF;
  margin-left: 25%;
}
</style>
