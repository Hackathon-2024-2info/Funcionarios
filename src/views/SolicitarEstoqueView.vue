<script setup>



</script>

<template>
<h1>SOLICITAR ITEM</h1>

<form>
    <div id="form">
    <label for="">Nome do item</label>
    <input type="text" id="text-input" required placeholder="Insira o nome do item a ser solicitado">

    <label for="">Marca do item</label>
    <input type="text"  id="text-input" placeholder="Insira a marca do item a ser solicitado">

    <label for="">Descrição do item</label>
    <input type="text"  id="text-input" placeholder="Insira a descrição/motivo do item a ser solicitado">

    <label for="">Quantidade</label>
    <input type="number"  id="text-input" placeholder="Insira a quantidade do item a ser solicitado">

    <button id="enviar" @click="a">Enviar</button>
</div>
</form>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
*{
    background-color: #F5F5F7;
}

#form{
    display: flex;
    flex-direction: column;
    margin-left: 326px;
}
h1{
    margin-left: 326px;
    font-family: "Readex Pro", sans-serif;
    font-size: 26px;
    font-weight: 600;
    color: #180577;
    padding-top: 8%;
    padding-bottom: 3%;

}
#text-input{
    background-color: rgb(217, 217, 217, 0.43);
    border-radius: 5px;
    border-style:inherit;
    width: 40%;
    height: 5.5vh;
    margin-bottom: 3%;  
    font-family: "Karla", sans-serif;
    font-size: 12px;
    padding-left: 1.4%;
    color: #687C94;
}
label{
    color: #666666;
    font-size: 16px;
    font-family: "Karla", sans-serif;
    margin-bottom: 1%;
}
#enviar{
    height: 6.5vh;
    width: 12%;
    background-color: #091D87;
    border-radius: 5px;
    border-style: inherit;
    color: #FFFFFF;
    font-family: "Karla", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-top: 3%;
    margin-left: 14%;
}


</style>