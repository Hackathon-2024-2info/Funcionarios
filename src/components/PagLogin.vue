<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
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

const authStore = useAuthStore();

</script>

<template>
  <main id="main">
    <section>
      <div class="img">
          <img class="logo" src="../assets/logo AVANTE.png" alt="" />
      </div>
      
        <h1>SEJA BEM-VINDO!</h1>
        <p class="pergunta">Ainda não tem uma conta?</p>
        <!-- <RouterLink to="/about"> -->
          <button id="enviar" type="submit" @click="authStore.toggleAdmin">Cadastre-se</button>
        <!-- </RouterLink>     -->
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
            <RouterLink to="/estoque" v-if="!authStore.user.is_admin"><button id="enviarc" type="submit">Concluir</button></RouterLink>
            <RouterLink to="/estoqueadmin" v-if="authStore.user.is_admin"><button id="enviarc" type="submit">Concluir</button></RouterLink>
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

.img {
        display: flex;
        align-items: center;
        justify-content: center;
      }

.container{
  display: grid;
  grid-template-columns: 25% 1fr 25%
}
.pergunta{
margin-top: 5rem;
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
.logo{
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
  border: 0px solid; /* Borda inicial em cinza claro */
  margin: 0;
  cursor: pointer;
padding-left: 2%;
transition: border-color 0.3s ease; /* Adiciona uma transição suave para a borda */
}
input:focus {
  border: 2px solid blue;
  border-color: #091D87; /* Cor azul */
  outline: none; /* Remove o contorno padrão do navegador */
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
  margin-top: 6%;
  margin-bottom: 4%;
  
}

 button{
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
  cursor: pointer; /* Adiciona a mudança do cursor para a mãozinha */
  transition: transform 0.1s ease; /* Adiciona uma transição suave para o efeito */
}
button:active {
  transform: scale(0.95); /* Diminui o tamanho do botão para 95% */
}
button#enviar {
  margin-left: 120px;
}
button#enviarc {
  margin-left: 100px;
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

.congmta,
p {
  font-family: 'Karla';
   text-align: center;
} 
@media (max-width: 768px) {
  section {
    height: 45vh;
    padding: 2px;
  }

  .logo {
    width: 25vw;
    margin-bottom: 5px;
  }

  #main {
    grid-template-columns: 1fr;
  }

  .container {
    grid-template-columns: 1fr;
  }

  input {
    width: 80% !important;
    margin-left: 10%;
    margin-top: 0.006%;
  }
  label {
    margin-left: 10%;
    font-size: 14px;
  }

  button {
    weight: 10px;
    width: 30% !important; /* Novo comprimento para telas menores */
    font-size: 15px;
    padding: 8px 16px !important;
  }
  button#enviar {
    margin-left: 35%;
    padding: 6px 12px !important;
    margin-top: 2%;


  }
  button#enviarc {
    margin-left: 35%;
    margin-top: 5%;
    padding: 8px 16px !important;

  }
  #h1 {
    font-size: 6vw;
    margin-top: 2%;
  }

  h1 {
    font-size: 4vw;
  }

  .pergunta {
    font-size: 4vw;
    margin-top: 2vh;
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
    margin-left: 0;
  }

  #h1 {
    font-size: 6vw;
  }

  h1 {
    font-size: 4vw;
  }

  .logo {
    margin-top: 10vh;
  }
}
</style>
