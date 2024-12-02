<script setup>
import '@/assets/main.css'
import '@/assets/inputAdd.css'
import { reactive } from 'vue'

import { ref } from 'vue';
import axios from 'axios';

// const nomeitem = ref([]);
// const marcaitem = ref([]);
// const quantidadeitem = ref('');

// const fetchNomes = async () => {
//   try {
// 	const response = await axios.get('http://seu-dominio.com/api/dificuldades/');
// 	nomeitem.value = response.data;
//   } catch (error) {
// 	console.error('Erro ao buscar dificuldades:', error);
//   }
// };

// const fetchMarcas = async () => {
//   try {
// 	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
// 	marcaitem.value = response.data;
//   } catch (error) {
// 	console.error('Erro ao buscar colaborações:', error);
//   }
// };

// const fetchQtd = async () => {
//   try {
// 	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
// 	quantidadeitem.value = response.data;
//   } catch (error) {
// 	console.error('Erro ao buscar colaborações:', error);
//   }
// };

const submitServico = async () => {
  try {
	const response = await axios.post('http://seu-dominio.com/api/Servico/', {
  	cliente: cliente.value,
  	funcionario: selectedFuncionario.value,
  	descricao: descricao_servico.value,
	});
	console.log('Relatório enviado com sucesso:', response.data);
  } catch (error) {
	console.error('Erro ao enviar relatório:', error);
  }
};

// onMounted(() => {
//   fetchDificuldades();
//   fetchColaboracoes();
// });

const cliente = ref('');
const selectedFuncionario = ref('');
const descricao_servico = ref('');






const TipoServicos = [
  {
    id: 1,
    nome: 'Manutenção preventiva'
  },
  {
    id: 2,
    nome: 'Manutenção preditiva'
  },
  {
    id: 3,
    nome: 'Manutenção corretiva'
  }
]

const novoServico = reactive({
  servico: ''
})
</script>

<template>
  <h1>ADICIONAR SERVIÇO</h1>
  <form id="formulario">
    <label for="">Selecione o tipo de serviço</label>
    <select v-model="novoServico.servico" id="tipo-servico">
      <option value="" disabled>Selecione um tipo de serviço</option>
      <option v-for="servico in TipoServicos" :key="servico.id" :value="TipoServicos.nome">
        {{ servico.nome }}
      </option>
    </select>
    <label for="">Empresa solicitadora do serviço</label>
    <input type="text" class="input1" placeholder="Insira o nome da empresa cliente" v-model="cliente"/>
    <label for="">Funcionários que deverão prestar o serviço</label>
    <select v-model="selectedFuncionario" id="funcionarios">
      <option value="" disabled>Selecione</option>
      <option v-for="funcionario in Funcionarios" :key="funcionario.id" :value="Funcionarios.nome">
        {{ funcionario.nome }}
      </option>
    </select>
    <label for="">Descrição do serviço</label>
    <input type="text" class="input2" required placeholder="Insira a descrição do serviço" v-model="descricao_servico"/>
    <button id="enviar" @click="submitServico">Enviar</button>
  </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@media only screen and (min-device-width: 601px) {
  #formulario {
    display: flex;
    flex-direction: column;
    margin-left: 7%;
  }

  h1 {
    color: #180577;
    font-size: 26px;
    font-family: 'Readex Pro', sans-serif;
    font-weight: 600;
    margin-bottom: 2%;
    margin-left: 7%;
    margin-top: 4%;
  }

  #enviar {
    width: 10%;
    margin-left: 10%;
    padding: 0.8%;
    border-radius: 5px;
    border-style: hidden;
    background-color: #091d87;
    color: #ffffff;
    font-size: 16px;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
  }
}

@media only screen and (max-device-width: 600px) {
  #formulario {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
  }

  input {
    width: 87.5%;
    height: 40px;
    margin-bottom: 8%;
    padding-left: 2%;
    
  }
  select {
    width: 90%;
    height: 40px;
    color: rgb(114, 112, 112);
    margin-bottom: 8%;
  }
  label {
    font-size: 13px;
    margin-bottom: 4%;
  }
  h1 {
    color: #180577;
    font-size: 20px;
    font-family: 'Readex Pro', sans-serif;
    font-weight: 600;
    margin-bottom: 2%;
    margin-left: 7%;
    margin-top: 4%;
    margin-bottom: 5%;
    margin: 10%;
  }

  button {
    border-radius: 5px;
    border-style: hidden;
    background-color: #091d87;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    width: 35%;
    height: 29px;
    margin: 5% 30% 0 30%;

  }
}
</style>
