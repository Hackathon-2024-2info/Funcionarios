<script setup></script>

<template>
  <button class="btn-azul">SOLICITAR ITEM PARA O ESTOQUE</button>
  <label for="">Filtrar</label>
  <select name="Selecione" id="Selecione">
    <option value="" class="option">SELECIONE</option>
  </select>
  <div class="setas">
    <button><img src="../assets/esquerda.png" alt="" /></button>
    <p>1</p>
    <button><img src="../assets/direita.png" alt="" /></button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.btn-azul {
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Karla';
  background-color: #091d87;
  padding: 0.5%;
  font-weight: 700;
}

.setas {
  width: 100%;
  display: flex;
}

label, select, option{
  font-family: 'Karla';
}
p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
}

button {
  border: none;
  background: white;
}

select{
    border-radius: 20px;
    border: none;
    background: rgb(84, 111, 255, 0.32);
    color: #a0a0fa;
    padding: 0.2%;
    padding-left: 2%;
    padding-right: 2%;
}

.option{
    font-size: 17%;
}
</style>
