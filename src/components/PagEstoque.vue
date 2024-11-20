<script setup>
// import { useAuthStore } from '@/stores/auth';
import { useEstoqueStore } from '../stores/estoque.js';

// const props = defineProps(['id']);
const estoqueStore = useEstoqueStore();
// const authStore = useAuthStore();
// const estoque = ref({});

// console.log(estoqueStore.getProductById())
// onMounted(() => {
//   estoque.value = estoqueStore.getProductById(props.id)
// })

</script>

<template>
  <div class="small">
    <main>
      <div class="filtrar">
        <label for="">Filtrar:</label>

        <select name="Selecione" id="Selecione">
          <option value="" class="option">SELECIONE</option>
        </select>
      </div>
    </main>

    <table class="tabela-itens">
      <thead>
        <tr>
          <th>
            <div class="th-content">
              <span> Código do item </span>
            </div>
          </th>
          <th>
            <div class="th-content">
              <span> Nome do item </span>
            </div>
          </th>
          <th>
            <div class="th-content">
              <span> Quantidade </span>
            </div>
          </th>
          <th>
            <div class="th-content">
              <span> Marca do item </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estoque in estoqueStore.estoques" :key="estoque.id">
           <td>{{ estoque.id }}</td>
        <td>{{ estoque.nome }}</td>
        <td>{{ estoque.quantidade }}</td>
        <td>{{ estoque.marca }}</td>
        </tr>
      </tbody>
    </table>
    <div class="setas">
      <button><img src="../assets/esquerda.png" alt="" /></button>
      <p>1</p>
      <button><img src="../assets/direita.png" alt="" /></button>
    </div>

  <div class="large">
    <main>
      <div class="filtrar">
        <label for="">Filtrar:</label>
        <select name="Selecione" id="Selecione">
          <option value="" class="option">SELECIONE</option>
        </select>
      </div>
      <div class="setas">
        <button><img src="../assets/esquerda.png" alt="" /></button>
        <p>1</p>
        <button><img src="../assets/direita.png" alt="" /></button>
      </div>
    </main>

    <table class="tabela-itens">
      <thead>
        <tr>
          <th>
            <div class="th-content">
              <section class="order-icons">
                <img src="../assets/Vector-1.png" alt="" />
                <img src="../assets//Vector.png" alt="" />
              </section>
              <span> Código do item </span>
            </div>
          </th>
          <th>
            <div class="th-content">
              <section class="order-icons">
                <img src="../assets/Vector-1.png" alt="" />
                <img src="../assets//Vector.png" alt="" />
              </section>
              <span> Nome do item </span>
            </div>
          </th>
          <th>
            <div class="th-content">
              <section class="order-icons">
                <img src="../assets/Vector-1.png" alt="" />
                <img src="../assets//Vector.png" alt="" />
              </section>
              <span> Quantidade </span>
            </div>
          </th>
          <th>
            <div class="th-content">
              <section class="order-icons">
                <img src="../assets/Vector-1.png" alt="" />
                <img src="../assets//Vector.png" alt="" />
              </section>
              <span> Marca do item </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estoque in estoqueStore.estoques" :key="estoque.id">
         <td>{{ estoque.id }}</td>
        <td>{{ estoque.nome }}</td>
        <td>{{ estoque.quantidade }}</td>
        <td>{{ estoque.marca }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


@media only screen and (max-device-width: 700px) {

  body {
    margin: 0;
    max-width: fit-content;

  }

  .large {
    display: none;
  }

  .small {
    background-color: rgba(245, 245, 245, 1); 
  }

  .tabela-itens {
    font-family: 'Roboto', sans-serif;
    font-weight: 450;
    height: 100%;
    border-collapse: collapse;   
    margin: 0;
    margin-left: 5%;
    line-height: 2rem;
    font-size: 85%;
    margin: 10%;


    & td {
      border-bottom: 0.5px solid #d4d2d2;
      padding-left: 2%;

    }

    & .th-content {
      display: flex;
      align-items: center;
      /* Alinha o conteúdo verticalmente */
      justify-content: flex-start;
      /* Se quiser espaçar igualmente */

    }
  }

  .setas {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 15%;
  }

  label {
    margin-right: 3%;
  }

  .filtrar {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5%;
    padding-bottom: 5%;

    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 10%;
  }

  label,
  select,
  option {
    font-family: 'Karla';
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-left: 2%;
    margin-right: 2%;
    background: rgb(84, 111, 255, 0.32);
    padding: 3%;
    border-radius: 10px;
  }

  button {
    border: none;
    background-color: #f5f5f5;
  }

  select {
    border-radius: 20px;
    border: none;
    background: rgb(84, 111, 255, 0.32);
    color: #8787c7;
    padding: 0.2%;
    padding-left: 2%;
    padding-right: 2%;
  }

  span {
    margin-left: 5%;

  }
}

@media only screen and (min-device-width: 701px) {
  .small {
    display: none;
  }

  body {
    background-color: #f5f5f5;
  }

  .tabela {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-left: 5%;
    padding-right: 10%;
  }

  .tabela-itens {
    font-family: 'Roboto', sans-serif;
    font-weight: 450;
    width: 80%;
    border-collapse: collapse;
    margin: 0 auto;
    margin-left: 5%;
    line-height: 2.5rem;

    & td {
      border-bottom: 0.5px solid #d4d2d2;
    }

    & .th-content {
      display: flex;
      align-items: center;
      /* Alinha o conteúdo verticalmente */
      justify-content: flex-start;
      /* Se quiser espaçar igualmente */
    }
  }

  span {
    margin-left: 5%;
  }

  /* .icons-and-text {
  display: flex;
  flex-direction: row;  
  align-items: center;
  gap: 2%;
} */

  .order-icons {
    display: flex;
    flex-direction: column;

    & img {
      width: 8px;
      height: 8px;
    }
  }


  main {
    display: flex;
    margin-bottom: 3%;
  }

  .setas {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin-left: -5%;
    margin-top: -0.4%;
  }

  label {
    margin-right: 3%;
  }

  .filtrar {
    flex-wrap: nowrap;
    width: 100%;
    margin-left: 20%;
  }

  label,
  select,
  option {
    font-family: 'Karla';
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-left: 2%;
    margin-right: 2%;
    background: rgb(84, 111, 255, 0.32);
    padding: 1.9%;
    border-radius: 10px;
  }

  button {
    border: none;
    background-color: #f5f5f5;
  }

  select {
    border-radius: 20px;
    border: none;
    background: rgb(84, 111, 255, 0.32);
    color: #8787c7;
    padding: 0.2%;
    padding-left: 2%;
    padding-right: 2%;
  }

  main {
    margin-top: 5%;
  }

  .option {
    font-size: 17%;
  }

  ul,
  li {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  li {
    list-style: none;
    padding: 5%;
    margin-bottom: 5%;
  }


  .filtrar,
  .setas {
    margin-top: 1%;
  }



  .linha {
    width: 150%;
    margin-top: 5%;
    margin-bottom: -10%;
  }

  #ultimalinha {
    width: 100%;
    margin-top: 5%;
    margin-bottom: -10%;
  }
}
</style>
