<script setup>
import { useChamadoStore } from '../stores/chamados.js';
const chamadoStore= useChamadoStore();
</script>

<template>
  <div class="large">
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
            <section class="order-icons">
              <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
            </section>
            <span> Nº do relatório </span>
          </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Status do chamado </span>          
        </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Data</span>
        </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Solicitador </span>
        </div>
        </th>

    
      </tr>
    </thead>
    <tbody>
      <tr v-for="chamado in chamadoStore.chamados" :key="chamado.id">
        <td>{{ chamado.id }}</td>
        <td>{{ chamado.status }}</td>
        <td>{{ chamado.data }}</td>
        <td>{{ chamado.solicitador }}</td>
        <td>
        <div class="path-detail">
          <RouterLink to="/detalhechamado/:id"><img src="@/assets/Group 37329.png" alt="" id="path-detail"></RouterLink>
        </div>
        </td>
      </tr>
    </tbody>

  </table>
  </div>
  
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
            <span> N° do chamado </span>
          </div>
        </th>
        <th>
          <div class="th-content">
          <span> Status do chamado </span>          
        </div>
        </th>
        <th>
          <div class="th-content">
          <span> Data</span>
        </div>
        </th>
        <th>
          <div class="th-content">
          <span> Solicitador </span>
        </div>
        </th>
      </tr>
    </thead>
    <tbody>
  <tr v-for="chamado in chamadoStore.chamados" :key="chamado.id">
        <td>{{ chamado.id }}</td>
        <td>{{ chamado.status }}</td>
        <td>{{ chamado.data }}</td>
        <td>{{ chamado.solicitador }}</td>
        <td>
        <div class="path-detail">
          <RouterLink to="/detalhechamado/:id"><img src="@/assets/Group 37329.png" alt="" id="path-detail"></RouterLink>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@media only screen and (min-device-width: 601px) {

.small{
  display: none;
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
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  margin-left: 25%;
  line-height: 2.5rem;

  & td {
    border-bottom: 0.5px solid #d4d2d2;    
    
  }

  & td .path-detail{
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 50%;
    margin-bottom: 100px; */
  } 

  & .th-content {
    display: flex;
    align-items: center;
    /* Alinha o conteúdo verticalmente */
    justify-content: flex-start;
    /* Se quiser espaçar igualmente */  }
}

/* ja tentei botar essa coisa dentro de td, fora, dentro da chave amarela ali em cima, display flex com justify-content, 
display grid com align itens e NADA FUNCIONAAAAAAAAAAAAAA
.path-detail{
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
margin-bottom: 100px;
} */

span {
  margin-left: 5%;
}

.order-icons {
  display: flex;
  flex-direction: column;

  & img {
    width: 8px;
    height: 8px;  padding: 10%;


  }
}

main {
  display: flex;
  margin-bottom: 3%;
  margin-top: -95%;
  width: 100%;

}



label {
  margin-right: 3%;
}

.filtrar {
display: flex;
text-align: center;
margin-left: 52%;
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
  background: white;
}

select {
  border-radius: 20px;
  border: none;
  background: rgb(84, 111, 255, 0.32);
  color: #8787c7;
  padding: 0.2%;
  padding-left: 2%;
  padding-right: 2%;
  margin-left: 5%;
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


@media only screen and (max-device-width: 600px) {
.seta{
background: none;
}
.large{
  display: none;
}
span{
  font-weight: 500;
  font-size: 15px;
  width: 70%;
  line-height: 90%;
  text-align: left;
  margin-bottom: 10%;
  padding-top: 15%;
}

img {
  margin-bottom: -30%;

}
.tabela {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 5%;
  padding-right: 10%;
}

.tabela-itens {

  font-family: 'Roboto', sans-serif;
  width: 85%;
  border-collapse: collapse;
  margin: 0 auto;

  line-height: 2.5rem;

  & td {
    border-bottom: 0.5px solid #d4d2d2;    
   
  }

  & .th-content { 
    display: flex;
    align-items: center; /* Alinha o conteúdo verticalmente */
    justify-content: flex-start; /* Se quiser espaçar igualmente */
  }
}



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

  width: 100%;

}


label {
  margin-right: 3%;
}
.filtrar {
  flex-wrap: nowrap;
  width: 100%;
margin: 0 30% 0 30%;
padding-top: 5%;

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
  background: white;
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