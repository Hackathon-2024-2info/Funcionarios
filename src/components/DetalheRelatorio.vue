<script setup>
import { onMounted, ref } from 'vue'
// import { useAuthStore } from '@/stores/auth';
import { useRelatorioStore } from '@/stores/relatorios.js';
import axios from 'axios';

const props = defineProps(['id']);
const relatorioStore = useRelatorioStore();
// const authStore = useAuthStore()
const relatorio = ref({})


onMounted(() => {
  relatorio.value = relatorioStore.getProductById(props.id)
})

// import { onMounted, ref } from 'vue'
// import { useAuthStore } from '@/stores/auth';
// import { useServicoStore } from '../stores/servicos.js';


// const servicoStore = useServicoStore();
// const authStore = useAuthStore()
// const servico = ref({})


// onMounted(() => {
//   servico.value = servicoStore }

const titulo = ref('');
const funcionario = ref('');
const dataenvio = ref('');
const temporealizacao = ref('');
const dificuldade = ref('');
const colaboracao = ref('');
const pendencias = ref('');
const descricao = ref('');

const fetchTitulos = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/nome_Serviço/');
	titulo.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar dificuldades:', error);
  }
};

const fetchRemetentes = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/Cliente/');
	funcionario.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

const fetchDatas = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	dataenvio.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

const fetchTempos = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	temporealizacao.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

const fetchDificuldades = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	dificuldade.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

const fetchColaboracoes = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	colaboracao.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

const fetchPendencias = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	pendencias.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

const fetchDescricoes = async () => {
  try {
	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
	descricao.value = response.data;
  } catch (error) {
	console.error('Erro ao buscar colaborações:', error);
  }
};

// const submitRelatorio = async () => {
//   try {
// 	const response = await axios.post('http://seu-dominio.com/api/Servico/', {
//   	dificuldade: selectedDificuldade.value,
//   	tempo: tempoServico.value,
//   	colaboracao: selectedColaboracao.value,
//   	pendencias: pendencias.value,
// 	});
// 	console.log('Relatório enviado com sucesso:', response.data);
//   } catch (error) {
// 	console.error('Erro ao enviar relatório:', error);
//   }
// };

onMounted(() => {
  fetchColaboracoes();
  fetchDatas();
  fetchDescricoes();
  fetchDificuldades();
  fetchPendencias();
  fetchRemetentes();
  fetchTempos();
  fetchTitulos();
});

// const selectedDificuldade = ref('');
// const tempoServico = ref('');
// const selectedColaboracao = ref('');


</script>

<template>
    <main>
        <div class="botaozinho">
            <RouterLink to="/relatoriosadmin"><img class="img" src="@/assets/🦆 icon _Chevron left alt (line)_.png" alt=""></RouterLink>
        </div>
        <div class="texts">
            <h1 :v-model="titulo"> {{titulo}}</h1>
            <p :v-model="funcionario" >Remetente: {{remetente}}</p>
            <p class="chamado" :v-model="dataenvio">Relatório enviado em: {{dataenvio}}</p>
            <p class="tempo" :v-model="temporealizacao">Tempo de realização do serviço: {{temporealizacao}}</p>
            <p class="dificuldade" :v-model="dificuldade">Dificuldade do serviço: {{dificuldade}}</p>
            <p class="colaborar" :v-model="colaboracao">Colaboração da empresa: {{colaboracao}}</p>
            <p class="pendente" :v-model="pendencias">Possíveis pendências que ficaram na máquina: {{pendencias}}
            </p>
            <div class="espaco"></div>
            <p class="descricao" :v-model="descricao">Descrição: {{descricao }}
            </p>

        </div>

        <section class="container">
            <div class="container-carrosel">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
            </div>
        </section>

    </main>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');


.espaco {
    margin-top: 10%;
}

.botaozinho {
    position: absolute;
    top: 28%;
    left: 20%;
    width: 3%;
    height: 5.5%;
    background: rgba(84, 111, 255, 0.32);
    border-radius: 10px;
}


.container {
    position: absolute;
    width: 22%;
    right: 2%;
    top: 27%;
    padding: 1%;
    background-color: #ececec;
    border-radius: 20px;
}

.container-carrosel {
    margin-top: 10%;
    width: 320px;
    height: 680px;
    overflow-y: scroll;
    background: #ececec;
    display: flex;
    flex-direction: column;
    gap: 5%;
    margin-left: 10%;
}

.container-carrosel::-webkit-scrollbar {
    width: 0.7vw;
    width: 10px;
}

.container-carrosel::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;

}

.container-carrosel::-webkit-scrollbar-thumb {
    background-color: #6e78ff;
    width: 3%;
    border-radius: 4px;
}



.img {
    position: relative;
    display: flex;
    margin-left: 33%;
    margin-top: 22%;
}

h1 {
    display: flex;
    position: absolute;
    top: 29%;
    left: 37%;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #000000;
}

.texts {
    width: 50%;
    height: 30%;
    margin-left: 20%;
    margin-top: 20%;
}

.texts .descricao,
.pendente {
    line-height: 110%;
    word-wrap: break-word
}

.descricao {
    margin-top: -4%;

}


p {
    font-family: 'Karla';
    line-height: 400%;
    color: #000000;
    font-weight: 400;
    font-size: 18px;
}
</style>