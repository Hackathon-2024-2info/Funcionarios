<script setup>

</script>

<template>
<h1 class="solicitar">Solicitar chamado</h1>
<label for="">Motivo </label>
<input type="text" placeholder="Insira o motivo do chamado">


<label for="">Descrição  </label>
<input type="text" placeholder="Insira a decriçâo">
<button id="enviar" type="submit">Enviar</button>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

#main {
  display: grid;
  grid-template-columns: 30% 70%;
}

h1, .solicitar{

position: absolute;
width: 564px;
height: 24px;
left: 326px;
top: 177px;

font-family: 'Readex Pro';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 18px;
/* or 69% */
}







.logo{
  display: flex;
margin-top: 30%;
align-items: center;
align-self: center;
}
input{

display: flex;
flex-direction: row;
align-items: center;
padding: 10px 16px;
gap: 10px;

width: 465px;
height: 380px;

background: rgba(217, 217, 217, 0.43);
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
border: none;


}

label{
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #000000;
  text-align: center;
  margin-top: 6%;
  margin-bottom: 4%;
  
}

 button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 40px;
gap: 10px;

position: absolute;
height: 49px;
left: 485px;
right: 807px;
top: calc(50% - 49px/2 + 374.5px);

background: #091D87;
border-radius: 5px;

}

section {
  background: #0f0541;
  height: 100vh;
  width: 100%;
}

aside {
  margin: 5%;
}


</style>

