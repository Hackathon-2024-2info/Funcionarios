<script setup>
import { reactive } from 'vue'
const info = reactive({
  nome: '',
  email: '',
  senha: '',
  confisenha: '',
  usuario: '',
  telefone: '',
  matricula: '',
});
</script>

<template>
  <h1>Faça seu cadastro</h1>
  <form>
    <label for="">Crie seu usuário</label>
    <input type="text" v-model="info.usuario"/>
    <label for="">Crie sua senha</label>
    <input type="password" v-model="info.senha"/>
    <label for="">Confirme sua senha</label>
    <input type="password" v-model="info.confisenha"/>
    <label for="">Seu nome</label>
    <input type="text" v-model="info.nome"/>
    <label for="">Insira seu email</label>
    <input type="email" v-model="info.email"/>
    <label for="">Insira seu telefone</label>
    <input type="number" v-model="info.telefone"/>
    <label for="">Insira sua matrícula</label>
    <input type="number" v-model="info.matricula"/>
  </form>
</template>
