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
 <h1>Faça seu cadastro</h1>
 <form class="formulario" @submit.prevent="processarForm">
   <label for="">Crie seu usuário</label>
   <input type="text" v-model="info.usuario" required/>
   <label for="">Crie sua senha</label>
   <input type="password" v-model="info.senha" required/>
   <label for="">Confirme sua senha</label>
   <input type="password" v-model="info.confisenha" required/>
   <label for="">Seu nome</label>
   <input type="text" v-model="info.nome" required/>
   <label for="">Insira seu email</label>
   <input type="email" v-model="info.email" required/>
   <label for="">Insira seu telefone</label>
   <input type="number" v-model="info.telefone" required/>
   <label for="">Insira sua matrícula</label>
   <input type="number" v-model="info.matricula" required/>
   <button id="enviar" type="submit">Concluir</button>
 </form>


 <!-- Futuramente pra mandar pro banco aqui!!!! -->
 <div v-if="mostrarResultado" class="resultado">
   <p>Cadastro concluído!</p>
 </div>
</template>

