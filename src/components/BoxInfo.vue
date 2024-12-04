<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';
// import { useAuthStore } from '@/stores/auth';
// import { useServicoStore } from '../stores/servicos.js';
// const props = defineProps(['id']);
// const servicoStore = useServicoStore();
// const authStore = useAuthStore()
// const servico = ref({})

const tipo_de_servico = ref(''); 
const cliente = ref('');
const funcionario = ref('');
const data_final_servico = ref('');
const data_inicio = ref('');
const contato_responsavel = ref('');
const descricao_servico = ref('');
const pendencias_maquina = ref('');

const fetchPendencias = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/nome_Serviço/');
	pendencias_maquina.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar pendencias:', error);
  }
};

const fetchDataInicio = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/nome_Serviço/');
	data_inicio.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar data inicio:', error);
  }
};

const fetchTipos = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/nome_Serviço/');
	tipo_de_servico.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar tipos de serviço:', error);
  }
};

const fetchFuncionarios = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/nome_Serviço/');
	funcionario.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar funcionarios:', error);
  }
};

const fetchClientes = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/nome_Serviço/');
	cliente.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar clientes:', error);
  }
};

const fetchDataFinal = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/Cliente/');
	data_final_servico.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar data de datas finais:', error);
  }
};

const fetchContato = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	contato_responsavel.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar contatos:', error);
  }
};

const fetchDescricoes = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	descricao_servico.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar descrição:', error);
  }
};

onMounted(() => {
  fetchClientes();
  fetchContato();
  fetchDataFinal();
  fetchDescricoes();
  fetchTipos();
  fetchFuncionarios();
  fetchDataInicio();
  fetchPendencias();
});



// onMounted(() => {
//   servico.value = servicoStore.getProductById(props.id)
// })


</script>


<template>
  <main>
    <div class="espaçamento">
      <div class="box">
        <img src="../assets/Video Task.png" alt="mapaDps" />
        <p class="titulo" :v-model="tipo_de_servico">{{ nome }}</p>
          <div class="minicontainer">
          <p :v-model="cliente"> {{ cliente }} </p>
        </div>
        <div class="infos">
          <p :v-model="funcionario">Prestadores: {{prestadores}}</p>
          <p v-if="!authStore.user.is_admin" :v-model="tipo_de_servico">Previsão de duração: {{prevduracao}}</p>
          <p v-if="!authStore.user.is_admin" :v-model="contato_responsavel">Contato do responsável pela máquina: {{contatoresponsavel }}</p>
          <p class="descricao" v-if="!authStore.user.is_admin" :v-model="descricao_servico"> 
            Descrição: {{descricao }}
          </p>
          <p v-if="authStore.user.is_admin" :v-model="data_inicio">Data de início: {{ datainicio }}</p>
          <p v-if="authStore.user.is_admin" :v-model="data_final_servico">Data de finalização: {{datafinal}}</p>
          <p v-if="authStore.user.is_admin" :v-model="pendencias_maquina">Pendências: {{pendencias}}</p>
          <div class="teste">
          <RouterLink to="/detalherelatorio"><button v-if="authStore.user.is_admin" id="visurelatorio">Visualizar relatório</button></RouterLink>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');


#visurelatorio{
  font-family: 'Karla';
  color: white;
  background-color: #180577;
  width: 80%;
  height: 7vh;
  font-size: 18px;
  font-weight: 700;
  border-radius: 20px;
  border-color: rgba(217, 217, 217, 0);
}


.teste{
  display: flex;
  justify-content: end;
  margin-bottom: 30%;
}


main {
  background-color: #f5f5f5;
  /* height: 154vh; */
  height: 200vh;
  margin-top: -95%;
  margin-left:35%;
}


.espaçamento {
  display: grid;
  margin-right: 0px;
}


.box {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 7%;
  margin-right: 0px;
}


.box img {
  width: 100%;
  height: auto;
}


.titulo {
  object-fit: contain;
  white-space: nowrap;
  margin-top: 3.5%;
  margin-bottom: 2%;
  font-family: 'Kantumruy Pro';
  font-weight: 700;
  margin-left: 5%;
  font-size: 32px;
  display: flex;
  color: #091d87;
  text-transform: uppercase;
}


.minicontainer {
  width: 50%;
  margin-left: 5%;
  height: 3.5%;
  background: rgba(56, 77, 187, 0.4);
  border-radius: 20px;
  margin-bottom: 2%;
}


.minicontainer p {
  display: flex;
  object-fit: contain;
  font-family: 'Readex Pro';
  padding-top: 0.7%;
  padding-left: 40%;
}


.infos {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  margin-left: 5%;
  margin-bottom: 5%;
  padding-right: 5%;
}


.infos p {
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  margin-bottom: 2%;
}
.descricao{
  line-height: 110%;
  width: 75%;
  word-wrap: break-word;
}




@media only screen and (max-device-width: 480px) {


  main {
  background-color: #f5f5f5;
  height: 154vh;
  margin-top: 15%;
  margin-left:1%;
}

  #visurelatorio{
  font-family: 'Karla';
  color: white;
  background-color: #180577;
  width: 120%;
  height: 4.5vh;
  font-size: 10px;
  font-weight: 700;
  border-radius: 20px;
  border-color: rgba(217, 217, 217, 0);
}


.teste{
  display: flex;
  justify-content: start;
  margin-bottom: 30%;
}


  .box {
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  height: 80%;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 7%;
  margin-left: 3%;


}


p{
  font-size: 15px;
}


img {
  width: 100%;
  height: auto;
}
.espaçamento {
  display: grid;
  margin-left: 0%;
  margin-top: -15%;
}
.titulo {
  margin-top: 4%;
  font-size: 26px;
  font-family: 'Kantumruy Pro';
}


.minicontainer {
  width: 70%;
  margin-left: 5%;
  height: 3%;
  margin-top: 2%;
}


.minicontainer p {
  margin-top: -1%;
  font-weight: 400;
  font-size: 20px;
}


.infos {
  line-height: 200%;
  margin-left: 5%;
  padding-right: 5%;
  margin-top: 5%;
}


.infos p {
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;


}
.descricao{
  line-height: 110%;
  word-wrap: break-word;
  width: 60%;
}


}
</style>