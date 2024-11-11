<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useServicoStore } from '../stores/servicos.js';

const props = defineProps(['id']);
const servicoStore = useServicoStore();
const authStore = useAuthStore()
const servico = ref({})


onMounted(() => {
  servico.value = servicoStore.getProductById(props.id)
})

const itens = [
  {
    nome: 'fjfjsjf'
  },
  {
    nome: 'fhhfuih'
  },
  {
    nome: 'rngbjkrengjre'
  },
  {
    nome: 'fefhuifj'
  },
  {
    nome: 'fhfhfui'
  }
]

</script>

<template>
  <main>
    <div class="espaçamento">
      <div class="box">
        <img src="../assets/Video Task.png" alt="mapaDps" />
        <p class="titulo">{{ servico.nome }}</p>
          <div class="minicontainer">
          <p>{{servico.cliente}}</p>
        </div>
        <div class="infos">
          <p>Prestadores: {{servico.prestadores}}</p>
          <p v-if="!authStore.user.is_admin">Previsão de duração: {{servico.prevduracao}}</p>
          <p v-if="!authStore.user.is_admin">Contato do responsável pela máquina: {{ servico.contatoresponsavel }}</p>
          <p class="descricao" v-if="!authStore.user.is_admin">
            Descrição: {{ servico.descricao }}
          </p>
          <p v-if="authStore.user.is_admin">Data de início: {{ servico.datainicio }}</p>
          <p v-if="authStore.user.is_admin">Data de finalização: {{servico.datafinal}}</p>
          <p v-if="authStore.user.is_admin">Pendências: {{servico.pendencias}}</p>
          <div class="teste">
          <RouterLink to="/detalherelatorio"><button v-if="authStore.user.is_admin" id="visurelatorio">Visualizar relatório</button></RouterLink>
        </div>
        </div>
      </div>
    </div>
    <div class="espaçamento-lista">
      <h1 class="titulo-lista">Ferramentas necessárias:</h1>
      <ul class="lista">
        <li v-for="item in itens" :key="item.nome">
          {{ item.nome }}
        </li>
      </ul>
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
  width: 35%;
  height: 6vh;
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
  height: 154vh;
  margin-top: -82%;
}

.espaçamento {
  display: grid;
  margin-left: 20%;
  margin-right: 0px;
}

.box {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
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
  width: 100px;
}

.espaçamento-lista {
  display: grid;
  place-items: end;
}

.titulo-lista {
  display: flex;
  list-style: none;
  position: absolute;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  align-items: center;
  color: #091d87;
  background: rgba(84, 111, 255, 0.32);
  border-radius: 15px;
  padding-bottom: 0.1%;
  padding-top: 0.1%;
  padding-left: 0.1%;
  width: 25%;
  top: 30%;
  left: 71%;
  height: 2.5%;
}

.lista {
  list-style-position: outside;
  display: block;
  position: absolute;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  top: 40%;
  left: 70%;
  width: 23.5%;
}



ul {
  list-style-type: none;
  padding-left: 40px;
  width: 300px;
}

ul li {
  background: rgba(84, 111, 255, 0.32);
  border-radius: 20px;
  font-size: 16px;
  position: relative;
  margin-bottom: 10%;
}

ul li::before {
  content: "•";
  color: rgba(84, 111, 255, 0.32);
  font-size: 40px;
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-60%);
}
</style>