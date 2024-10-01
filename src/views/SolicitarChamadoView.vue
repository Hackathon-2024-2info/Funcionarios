<script setup>

</script>

<template>
  <main id="main">
    <div>

      <h1 class="solicitar">SOLICITAR CHAMADO</h1>
      <label for=""> Motivo </label>
      <input class="input1" placeholder="Insira o motivo do chamado">

    </div>
    <div class="espacamento"></div>
    <div>
      <label for=""> Descrição </label>
      <input class="input2" placeholder="Insira a decriçâo">
      <button id="enviar" type="submit">Enviar</button>
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
  margin-top: 8%;
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
  margin-top: 11%;
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
  text-align: center;
  margin-left: 29%
}
</style>
