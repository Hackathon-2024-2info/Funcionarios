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
    <section>
      <div>
        <img class="logo" src="../assets/logo AVANTE.png" alt="" />
        <h1>SEJA BEM-VINDO!</h1>
        <p class="pergunta">Ainda não tem uma conta?</p>
        <p class="conta">Cadastre-se</p>
      </div>
    </section>

    <aside>
      <div class="container">
        <h1 id="h1">Faça seu login</h1>
        <div class="formularioo">
          <form class="formulario" @submit.prevent="processarForm">
            <label for="">SEU USUÁRIO</label>
            <input type="text" v-model="info.usuario" required placeholder="Insira seu usuário" />
            <label for="">SUA SENHA</label>
            <input type="password" v-model="info.senha" required placeholder="Insira sua senha" />
            <button id="enviar" type="submit">Concluir</button>
          </form>
        </div>
      </div>
    </aside>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');


.pergunta{
margin-top: 15%;
  margin-bottom: 15%;
  font-size: 22px;
}
#main {
  display: grid;
  grid-template-columns: 30% 70%;
}

#h1{
  color: #000000;
  font-size: 36px;
  margin-top: 15%;
}
h1{
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
margin-left: 30%;
margin-top: 30%;

}
input {
  width: 578px;
  height: 30px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;

}

label{
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #000000;
  text-align: center;
}

.conta{
  
  background: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  justify-content: center;
  padding: 15px 40px;
  gap: 10px;
  width: 230px;
  margin-left: 20%;
  font-size: 16px;
}

section {
  background: #0f0541;
  height: 100vh;
  width: 100%;
}

aside {
  margin: 5%;
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

.consta,
p {
  font-family: 'Karla'; text-align: center;
} 
</style>
