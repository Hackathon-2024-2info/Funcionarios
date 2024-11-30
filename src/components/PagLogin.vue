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
    <section>
      <div class="img">
          <img class="logo" src="../assets/logo AVANTE.png" alt="" />
      </div>
      
        <h1>SEJA BEM-VINDO!</h1>
        <p class="pergunta">Ainda não tem uma conta?</p>
        <RouterLink to="/removeracesso"><button id="enviar" type="submit">Cadastre-se</button></RouterLink>
     
    </section>

    <aside>
      <h1 id="h1">Faça seu login</h1>
      <div class="container">

        <div></div>
        <div> 

          <form class="formulario" @submit.prevent="processarForm">
            <label for="">SEU USUÁRIO</label>
            <input type="text" v-model="info.usuario" required placeholder="Insira seu usuário" />
            <label for="">SUA SENHA</label>
            <input type="password" v-model="info.senha" required placeholder="Insira sua senha" />
            <RouterLink to="/servicos"><button id="enviar" type="submit">Concluir</button></RouterLink>
            </form>
      </div>
       <div>

       </div>
          
        </div>
      
    </aside>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

/* Base Styles */
body {
  margin: 0;
  padding: 0;
  font-family: 'Karla', sans-serif;
}

.img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 25% 1fr 25%;
}

.pergunta {
  margin-top: 2rem;
  font-size: 22px;
  text-align: center;
}

#main {
  display: grid;
  grid-template-columns: 30% 70%;
}

#h1 {
  color: #000000;
  font-size: 36px;
  margin-top: 5%;
  text-align: center;
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
  width: 100%;
  max-width: 700px;
  height: 50px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  margin: 0;
  padding-left: 2%;
  font-size: 16px;
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
  margin-bottom: 4%;
}

button {
  margin: 0 auto;
  display: block;
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  padding: 15px 40px;
  width: 230px;
  font-size: 16px;
  color: white;
  margin-top: 1.5rem; 
  border: none;
  text-align: center;
}

section {
  background: #0f0541;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

aside {
  margin: 5%;
  padding: 20px;
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

/* Responsividade */
@media (max-width: 1024px) {
  #main {
    grid-template-columns: 1fr;
  }

  aside {
    margin: 0;
    padding: 10px;
  }

  section {
    height: auto;
  }

  h1 {
    font-size: 28px;
    line-height: 36px;
  }

  button {
    width: 80%;
    max-width: 300px;
  }

  input {
    width: 90%;
    max-width: 500px;
  }

  .pergunta {
    margin-top: 1.5rem;
  }
}

@media (max-width: 768px) {

  .pergunta {
    font-size: 18px;
    margin-top: 1rem; 
  }

  #h1 {
    font-size: 18px;
    margin-top: 2%;
  }

  label {
    font-size: 14px;
  }

  input {
    width: 270px; 
    max-width: 600px; 
    padding-left: 1.5%;
    margin-left: -10%; 
  }

  button {
    font-size: 14px;
    padding: 10px 20px;
    margin-left: auto; 
    margin-right: auto; 
  }
  button#enviar {
    width: 150px; 
    padding: 8px 15px; 
    margin-left: 10px; 
  }
  .formulario button {
    width: 80%; 
    max-width: 250px; 
    margin: 1.5rem auto; }

  .formulario button#enviar {
    width: 57%;
    max-width: 250px;
  }
}
section {
    height: 60vh; 
    padding: 10px; 
  }
  .logo {
    width: 150px; 
    margin-top: 20%; 
  }

@media (max-width: 480px) {
  section {
    height: 50vh; 
    padding: 5px; 
  }
  h1 {
    font-size: 24px;
  }

  #main {
    display: flex;
    flex-direction: column;
  }

  section,
  aside {
    margin: 0;
    padding: 10px;
  }

  input {
    height: 38px;
  }

  button {
    width: 100%;
    padding: 10px;
  }

  .pergunta {
    margin-top: 1rem; 
    font-size: 16px;
  }
}
</style>

