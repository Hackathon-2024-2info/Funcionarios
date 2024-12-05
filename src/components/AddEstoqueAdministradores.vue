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
        const response = await axios.post('https://bdhackathon.fly.dev/admin/hackathon/administrador/Ferramentaspecass', {
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
 <form method="post" action="https://bdhackathon.fly.dev/Ferramentaspecas/">
        {% FlyV1
        fm2_lJPECAAAAAAAB+tJxBA9UKl2PxsA+pkLNpfK9+pMwrVodHRwczovL2FwaS5mbHkuaW8vdjGWAJLOAA2htB8Lk7lodHRwczovL2FwaS5mbHkuaW8vYWFhL3YxxDypR2z1TutORfM/vnko6VqCyWNNRMQQBdrpc5NSCuE+G4WElY+PxKlLX1Phrm72tv9wsGvHaWGlNNjyTSvETmklCxBwRRc/T62VZDHy+O6jM8JVPwEIHZIeYEqjjST/LWVS7jUkvYqYZ3fabffS/NxxJmgmN1sHY1rQ+M+D0/921JCfEOCWKdM5sXSFpQ2SlAORgc4AU5oEHwWRgqdidWlsZGVyH6J3Zx8BxCDPHTJMZhUpXfmwQTYP6r6s8OhIRXUgUKmEK8Oks9IB5Q==,fm2_lJPETmklCxBwRRc/T62VZDHy+O6jM8JVPwEIHZIeYEqjjST/LWVS7jUkvYqYZ3fabffS/NxxJmgmN1sHY1rQ+M+D0/921JCfEOCWKdM5sXSFpcQQreMr4IJpGQ31z056C71cVcO5aHR0cHM6Ly9hcGkuZmx5LmlvL2FhYS92MZgEks5nUP4WzwAAAAEjSRw0F84ADTL2CpHOAA0y9gzEEOmSJRIInVM8zZIYm25quqbEINmqehbZdEnC+3wR8TQYk5umw279i1hrvOxMNrtbpDlc
        %}
    <main id="main">
        <div>
            <h1 class="add">ADICIONAR ITEM AO ESTOQUE</h1>
            <label for=""> Nome do item </label>
            <input type="text" class="input1" placeholder="Insira o nome do item a ser adicionado"
                v-model="nome_ferramentaspecas.value" name="nome_Ferramentaspecas">
        </div>

        <div class="espacamento"></div>

        <div>
            <label for=""> Marca do item </label>
            <input type="text" class="input2" placeholder="Insira a marca do item" v-model="marca.value">
        </div>

        <div class="espacamento"></div>
        <div>
            <label for="">Quantidade do item </label>
            <input type="text" class="input3" placeholder="Insira a quantidade a ser adicionada ao estoque do item"
                v-model="quantidade_ferramentaspecas.value">
            <button id="Adicionar" type="submit" @click="submitEstoque">Adicionar</button>
        </div>

    </main>
</form>

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
