<script setup>
import MenuFuncionarios from '@/components/MenuFuncionarios.vue';
import pagHeader from '@/components/pagHeader.vue';
</script>

<template>
  <pagHeader></pagHeader>
  <MenuFuncionarios></MenuFuncionarios>
  <main id="main">
    <div>
<h1 class="solicitar">SOLICITAR CHAMADO</h1>
<label for=""> Título do chamado </label>
<input class="input1" placeholder="Insira o título do chamado">

</div>
    <div>

      
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
  margin-top: -73%;
}


.solicitar {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 18px;
  color: #180577;
  padding-top: 15%;
  padding-bottom: 5%;
  margin-left: 0%;
}

.espacamento {
  margin-top: 4%;
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
