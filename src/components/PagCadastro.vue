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
        <button id="voltar">Voltar a página de login</button>
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
  margin-left: 15%;
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
  margin-left: -28%;
  white-space: nowrap;
  /* margin-top: 10%;
  color: #000000;
  font-family: 'Readex Pro';
  text-align: center; */
}

.containerA {
  background-color: #0F0541;
  height: 125vh;
  width: 100%;
}

#enviar {
  margin-left: 80%;
}

/* .formularioo {

  width: 120%;
  margin-left: -26%;
  display: grid;
  grid-template-columns: 25% 1fr 25%
}
div .formularioo{
  max-width: 120%;;

} */

/* .faca {
  /* display: flex;
  top: 10%;
  margin-left: 26%; */
/* font-family: 'Readex Pro';
  color: #000000; */
/* font-size: 36px; */
/* margin-top: 15%;
  font-size: 225%; */
/* font-style: normal;
  font-weight: 400;

  color: #000000; */
/* } */

/* .containerA { */
/* display: grid;
  grid-template-columns: 20; */

/* width: 29.15%;
  height: 100%;
  left: 70.85%;
  background: #0f0541;
  margin: 0; */


/* }  */
.img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo{
  display: flex;
margin-top: 30%;
align-items: center;
align-self: center;
}

.bemvinde{
  font-family: 'Readex Pro';
  font-size: 32px;
  color: white;
  margin-left: 13%;
  margin-top: 1%;
}
.conta{
  font-family: 'Karla';
  color: white;
  font-weight: 100;
  font-size: 175%;
  text-align: center;
}
/* .logo {
  display: flex;
  position: absolute;
  width: 40%;
  height: 25%;
  left: 30%;
  top: 18%;
}


.bemvinde {
  display: flex;
  position: absolute;
  height: 40%;
  left: 19%;
  top: 35%;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 225%;
  color: #ffffff;
  margin-top: 15%;
}

.conta {
  display: flex;
  
} */

/* .voltar { */
/* display: flex;
  font-family: 'Karla';
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.1% 10%;
  margin-top: -15%;
  margin-left: 25%;
  width: 30%;
  position: absolute;
  background: #091d87;
  border-radius: 5px; */
/* Button */

/* Auto layout */
/* font-family: 'Karla';
  
  display: flex;
  flex-direction: row;
  padding: 1% 10%;
  background: #091d87;
  border-radius: 5px;
  color: #ffffff;
  margin-left: 25%;
  margin-top: -15%;
  width: 30%;
  border: none;
}

.voltar p {
  color: #ffffff;
  font-size: 90%;
} */

input {
  width: 578px;
  height: 46px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  margin: 0;
  margin-bottom: 5%;
  /* Espaço abaixo do input */
  /* display: flex;
  justify-content: center;
  flex-direction: row;
  
  width: 100%;
  height: 4.5%;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  ; */
}

label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: block;
  margin-bottom: 5%;
  /* Espaço entre o label e o input */
  /* line-height: 19px;
  display: flex;
  color: #000000;
  text-align: center;
  margin-top: 6%;
  margin-bottom: 4%; */
  white-space: nowrap;
  /* display: flex;
  flex-direction: row;
  width: 578px;
  height: 1.5%;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 100%;
  display: flex;
  color: #000000;
  padding-bottom: 3%; */
}

button {
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

#voltar{
  margin-left: 20%;
  text-align: center;
}

/* button{
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
} */
</style>
