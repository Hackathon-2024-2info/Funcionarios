<script setup>
import MenuFuncionarios from '@/components/MenuFuncionarios.vue';
import pagHeader from '@/components/pagHeader.vue';
import { ref } from 'vue';
import axios from 'axios';

// // const nomeitem = ref([]);
// // const marcaitem = ref([]);
// // const quantidadeitem = ref('');

// // const fetchNomes = async () => {
// //   try {
// // 	const response = await axios.get('http://seu-dominio.com/api/dificuldades/');
// // 	nomeitem.value = response.data;
// //   } catch (error) {
// // 	console.error('Erro ao buscar dificuldades:', error);
// //   }
// // };

// // const fetchMarcas = async () => {
// //   try {
// // 	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
// // 	marcaitem.value = response.data;
// //   } catch (error) {
// // 	console.error('Erro ao buscar colaborações:', error);
// //   }
// // };

// // const fetchQtd = async () => {
// //   try {
// // 	const response = await axios.get('http://seu-dominio.com/api/colaboracoes/');
// // 	quantidadeitem.value = response.data;
// //   } catch (error) {
// // 	console.error('Erro ao buscar colaborações:', error);
// //   }
// // };

const submitChamado = async () => {
  try {
	const response = await axios.post('http://seu-dominio.com/api/Ferramentaspecas/', {
  	motivo: motivo.value,
  	descricao: descricao.value,
  	titulo: titulo.value,
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

const motivo = ref('');
const descricao = ref('');
const titulo = ref('');

</script>

<template>
  <pagHeader></pagHeader>
  <MenuFuncionarios></MenuFuncionarios>
  <main id="main">
    <div>

      <h1 class="solicitar">SOLICITAR CHAMADO</h1>
      <label for=""> Motivo </label>
      <input class="input1" placeholder="Insira o motivo do chamado" v-model="motivo">

    </div>
    <div class="espacamento"></div>
    <div>
      <label for=""> Descrição </label>
      <input class="input2" placeholder="Insira a decriçâo" v-model="descricao">
      <button id="enviar" type="submit" @click="submitChamado">Enviar</button>
    </div>

  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

#main {
  width: 564px;
  height: 734px;
  margin-left: 28%;
  margin-top: -73%;
}


.solicitar {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 18px;
  color: #180577;
  padding: 53px;
  margin-left: -9%;
}

.espacamento {
  margin-top: 8%;
}

.input1 {
  padding: 10px 16px;
  gap: 10px;
  width: 465px;
  height: 39px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;

  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
}

.input2 {
  padding: 10px 16px;
  width: 465px;
  height: 380px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  order: 1;
  flex-grow: 0;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
}


label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #666666;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding: 15px;
  margin-left: -2.1%;
}


button {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  display: inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 40px;
  width: 148px;
  font-size: 16px;
  color: white;
  margin-top: 3rem;
  border: none;
  margin-left: 29%;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
}

@media (max-width:480px) {
  #main {
  width: fit-content;
  height: 917px;
  margin-left: 5%;
  margin-top: 8%;
}


.solicitar {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 0px;
  color: #180577;
  padding: 40px;
}

.espacamento {
  margin-top: 5%;
}

.input1 {
  padding: 10px 16px;
  gap: 10px;
  width: 320px;
  height: 46px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
}

.input2 {
  padding: 10px 16px;
  width: 320px;
  height: 296px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  order: 1;
  flex-grow: 0;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
}


label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #666666;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding: 15px;
  margin-left: -2.1%;
}


button {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  display: inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 40px;
  width: 148px;
  font-size: 16px;
  color: white;
  margin-top: 3rem;
  border: none;
  margin-left: 27%;
  font-style: normal;
  font-weight: 700;
  line-height: 10px;
}

}
</style>
