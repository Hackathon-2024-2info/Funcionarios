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
  <main id="main">
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
      <RouterLink to="/login"><button id="voltar">Voltar a página de login</button></RouterLink>
    </div>

    <!-- Futuramente pra mandar pro banco aqui!!!! -->
    <!-- <div v-if="mostrarResultado" class="resultado">
    <button>Cadastro concluído!</button>
  </div> -->
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');


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
  height: 100vh;
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
