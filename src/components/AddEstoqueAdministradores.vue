<script setup>
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

const submitEstoque = async () => {
  try {
	const response = await axios.post('http://seu-dominio.com/api/Ferramentaspecas/', {
  	nome: nome_ferramentaspecas.value,
  	marca: marca.value,
  	quantidade: quantidade_ferramentaspecas.value,
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

const nome_ferramentaspecas = ref('');
const marca = ref('');
const quantidade_ferramentaspecas = ref('');

</script>

<template>
    <main id="main">
        <div>
            <h1 class="add">ADICIONAR ITEM AO ESTOQUE</h1>
            <label for=""> Nome do item </label>
            <input type="text" class="input1" placeholder="Insira o nome do item a ser adicionado" v-model="nome_ferramentaspecas">
        </div>

        <div class="espacamento"></div>

        <div>
            <label for=""> Marca do item </label>
            <input type="text" class="input2" placeholder="Insira a marca do item" v-model="marca">
        </div>

        <div class="espacamento"></div>
        <div>
            <label for="">Quantidade do item </label>
            <input type="text" class="input3" placeholder="Insira a quantidade a ser adicionada ao estoque do item" v-model="quantidade_ferramentaspecas">
            <button id="Adicionar" type="submit" @click="submitEstoque">Adicionar</button>
        </div>

    </main>

</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');



#main {
    width: 29%;
    margin-left: 24%;
    margin-top: 7%;
}




.add {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 18px;
    color: #180577;
    padding: 10%;
    margin-left: -9%;
}



.espacamento {
    margin-top: 5%;
}



.input1 {
    padding: 2% 3%;
    gap: 1%;
    width: 85%;
    height: 46px;
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
    padding: 2% 3%;
    gap: 1%;
    width: 85%;
    height: 46px;
    background: rgba(217, 217, 217, 0.43);
    border-radius: 5px;
    flex: none;
    order: 1;
    align-self: stretch;
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


.input3 {
    padding: 2% 3%;
    gap: 1%;
    width: 85%;
    height: 46px;
    background: rgba(217, 217, 217, 0.43);
    border-radius: 5px;
    flex: none;
    order: 1;
    align-self: stretch;
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
    padding: 3%;
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
    padding: 3% 5%;
    font-size: 16px;
    color: white;
    margin-top: 3rem;
    border: none;
    margin-left: 32%;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;

}
</style>
