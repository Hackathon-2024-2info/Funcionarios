<script setup>
// import { onMounted, ref } from 'vue'
// import { useAuthStore } from '@/stores/auth';
import { useServicoStore } from '../stores/servicos.js';
import { RouterLink } from 'vue-router';
const servicoStore = useServicoStore();
// const authStore = useAuthStore()
// const servico = ref({})


// onMounted(() => {
//   servico.value = servicoStore }

</script>

<template>
 <div class="sm">
  <div class="body">
      <div id="teste"></div>
      <div>
     <RouterLink to="/addservico"><button class="btn-azul">ADICIONAR NOVO SERVIÇO</button></RouterLink>
          <div class="filtrar">
            
            <label for="">Filtrar:</label>
            <select name="Selecione" id="Selecione">
              <option value="" class="option">SELECIONE</option>
            </select>
          </div>
         
      
        <section>
            <div class="box" v-for="servico in servicoStore.servicos" :key="servico.id">
              <img src="../assets/logoopaca.png" alt="" class="img" />
              <div class="info">
                <h3>{{servico.nome}}</h3>
                <div class="txt">
                  <P class="txt-box">{{servico.cliente}}</P>
                  <p class="txt-box"> {{ servico.datainicio }}</p>
                </div>

                <RouterLink to="/detalheservico/1"><button class="btn-box">Ver detalhes</button></RouterLink>
              </div>
          </div>
        </section>
         <div class="setas">
            <button style="background-color: #f5f5f5">
              <img src="../assets/esquerda.png" alt="" />
            </button>
            <p class="p">1</p>
            <button style="background: #f5f5f5"><img src="../assets/direita.png" alt="" /></button>
          </div>
      </div>
    </div></div>




 <div class="lg"><div class="body">
      
      <div>
        <div class="botoes">  
          <RouterLink to="/addservico"><button class="btn-azul">ADICIONAR NOVO SERVIÇO</button></RouterLink>
          <div class="filtrar">
            <label for="">Filtrar:</label>
            <select name="Selecione" id="Selecione">
              <option value="" class="option">SELECIONE</option>
            </select>
          </div>
          <div class="setas">
            <button style="background-color: #f5f5f5">
              <img src="../assets/esquerda.png" alt=""  />
            </button>
            <p class="numerosetas">1</p>
            <button style="background: #f5f5f5"><img src="../assets/direita.png" alt="" /></button>
          </div>
        </div >
        <section>
            <div class="box" v-for="servico in servicoStore.servicos" :key="servico.id">
              <img src="../assets/logoopaca.png" alt="" />
              <div class="info">
                <h3>{{servico.nome}}</h3>
                <div class="txt">
                  <P class="txt-box">{{servico.cliente}}</P>
                  <p class="txt-box"> {{ servico.datainicio }}</p>
                </div>

                <RouterLink to="/detalheservico/:id"><button class="btn-box">Ver detalhes</button></RouterLink>
              </div>
          </div>
        </section>
      </div>
    </div></div>
    

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@media only screen and (min-device-width: 601px) {
  .sm{
    display: none;
  }
  .body {

    margin-left: 20%;
    position: absolute; /* Posiciona o main no topo da página */
    top: 25%; /* Garante que o main esteja no topo */
    width: 80%;
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
section {
  display: grid;
  grid-template-columns: 50% 50%;
}

.txt {
  margin-top: 7%;
  bottom: 15%;
}
.botoes{
  display: grid;
  margin-left: 20%;
  align-items: center;
  grid-template-columns: 30% 30% 30%;
  
}
.box {
  margin: 5%;
  display: flex;
  background: rgb(255, 255, 255);
  font-family: 'karla';
  text-align: center;
  color: black;
  border-radius: 20px;
  height: 186px;
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


body {
  color: #f5f5f5;
}
.filtrar {
  display: block;
margin-top: 2%;
  flex-wrap: nowrap;
 
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
.btn-azul {
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Karla';
  background-color: #091d87;
  padding: 3%;
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
.numerosetas{
padding:3.5%;
font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-left: 4%;
  padding-right: 4%;
  margin: 5%;
  background: rgb(84, 111, 255, 0.32);

  border-radius: 10px;
  color: black;
}
.setas {
  display: flex;
  margin-left: -5%;
}
}


@media only screen and (max-device-width: 600px) {
.lg{
  display: none;
}

.img{
  width: 154px;
  height: 128px;
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
  margin-bottom: 2%;
  font-size: 15px;
}
h3{
  margin-top: -5%;
}

.txt {
 
  bottom: 5%;
}

.box {
  margin: 3%;
  display: flex;
  background:rgba(255, 255, 255, 1);
  font-family: 'karla';
  text-align: center;
  color: black;
  border-radius: 20px;
  height: 128px;
  width: 337px;
  
}

.info {
  margin: 5%;
}


label,
select,
option {
  font-family: 'Karla';
}

section{
  display: flex;
  flex-direction: column;
  align-items: center;
}


.p {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-left: 1%;
  margin-right: 1%;
  background: rgb(84, 111, 255, 0.32);
  padding: 3%;
  border-radius: 10px;
  color: black;
}
body {
  color: #f5f5f5;
}

.filtrar {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 5%;
    margin-top: 10%;
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
.btn-azul {
  border: none;
  border-radius: 5px;
  color: white;
  width:65%;
  font-family: 'Karla';
  background-color: #091d87;
  padding: 2%;
  padding-left: 9%;
  padding-right: 9%;
  font-weight: 700;
  display: block;
 margin: 0 auto;
 margin-top: 8%;

}

.btn-box {
  background-color: #091d87;
  font-family: 'Karla';
  color: white;
  padding: 2%;
  border-radius: 20px;
  font-weight: 700;

  width: 60%;
}

main {
  display: flex;
  margin-bottom: 3%;
}

.setas {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 15%;
    
  }
}
</style>
