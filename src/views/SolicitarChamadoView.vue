<script setup>

</script>

<template>
  <main id="main">
    <div class="Chamado">

      <h1 class="solicitar">SOLICITAR CHAMADO</h1>
      <label for="">Motivo </label>
      <input type="text" class="input1" placeholder="Insira o motivo do chamado">
    </div>
    <div class="espacamento"></div>
    <div class="descricao">
      <label for="">Descrição </label>
      <input type="text" class="input2" placeholder="Insira a decriçâo">
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
  margin-left: 326px;
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




.input1 {

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 465px;
  height: 46px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  border: none;

}

.input2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 465px;
  height: 380px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  border: none;


}

label {
  width: 465px;
  height: 18px;
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
  padding: 15px 40px;
  height: 49px;
  margin-left: 485px;
  right: 807px;
  background: #091D87;
  border-radius: 5px;
  border: none;
  width: 49px;
  height: 19px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  display: grid;
  place-items: center;
  align-items: center;
  text-align: center;
  margin-top: 63px;

  color: #FFFFFF;

  justify-content: center;
  align-items: center;
  padding: 15px 40px;



  height: 49px;
  margin-left: 36%;
  right: 807px;


  background: #091D87;
  border-radius: 5px;



}
</style>
