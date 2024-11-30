<script setup>
import { useRelatorioStore } from '../stores/relatorios.js';

const relatorioStore = useRelatorioStore();
</script>

<template>
 
    <div class="body">
      <div></div>
      
        <main>
          <div class="filtrar">
            <label for="">Filtrar:</label>
            <select name="Selecione" id="Selecione">
              <option value="" class="option">SELECIONE</option>
            </select>
          </div>
          <div class="setas">
            <button style="background-color: #f5f5f5">
              <img src="../assets/esquerda.png" alt="" />
            </button>
            <p class="p">1</p>
            <button style="background: #f5f5f5"><img src="../assets/direita.png" alt="" /></button>
          </div>
      
        </main>
      </div>
      
        
        <section>
          <div id="display">
            <div class="box" v-for="relatorio in relatorioStore.relatorios" :key="relatorio.id">
              <img src="../assets/logoopaca.png" alt="" />
              <div class="info">
                <h3>{{relatorio.nome}}</h3>
                <div class="txt">
                  <P class="txt-box">{{relatorio.cliente}}</P>
                  <p class="txt-box">{{relatorio.dataenvio}} </p>
                </div>

                <RouterLink to="/detalherelatorio/:id"><button class="btn-box">Ver detalhes</button></RouterLink>
              </div>
          </div>
          </div>
        </section>
    

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#display{
  display: flex;
 flex-direction: row;
 flex-wrap: wrap;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f5f5f5;
  margin: 0;
}
.txt-box {
  margin-bottom: 5%;
}
section{
  margin-left: 18%;
}

.txt {
  margin-top: 7%;
  bottom: 15%;
}

.box {
  margin: 5%;
  margin-bottom: -1%;
  display: flex;
  background: rgb(255, 255, 255);
  font-family: 'karla';
  text-align: center;
  color: black;
  border-radius: 20px;
  height: 186px;
  width: 40%;
}

.info {
  margin: 5%;
}

label {
  margin-right: 3%;
}
label,
select,
option {
  font-family: 'Karla';
}

main {
  padding-top: 5%;
  padding-left: 30%;

width: 90%;
 
}
.p {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-left: 2%;
  margin-right: 2%;
  background: rgb(84, 111, 255, 0.32);
  padding: 1.9%;
  border-radius: 10px;
  color: black;
}
body {
  color: #f5f5f5;
}
.filtrar {
  flex-wrap: nowrap;
  width: 100%;
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
  margin-left: 2%;
}


.btn-box {
  background-color: #091d87;
  font-family: 'Karla';
  color: white;
  padding: 2%;
  border-radius: 20px;
  font-weight: 700;
  margin: 5%;
  width: 50%;
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
  margin-left: -40%;
}

</style>
