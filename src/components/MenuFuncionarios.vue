<script setup>
</script>

<template>
<div class="menu">
    <nav>
        <img src="../assets/logo AVANTE.png" alt="" class="img">
        <button class="btn-branco">Estoque</button>
        <button class="btn-azul">Serviço</button>
        <button class="btn-branco">Relatório</button>
     <img src="../assets/Question.png" alt="" class="warning">
        <div class="box">
           
        <p class="title">Abra um chamado</p>
        <p class="frase-box">Dúvidas ou problemas, abra um chamado ao administrador.</p>
        <button>Abrir chamado</button>
        </div>
    </nav>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');
.menu{
    display: grid;
    grid-template-columns: 17% 1fr;
}
nav{
    background: #0F0541;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    
    justify-content: start;
    align-items: center;
}

.img{
    width: 14vh;
    height: 14vh;
    margin-top: 10%;

}
img{
      display: grid ;
  place-items: center;
 padding: -12356px;

}
.btn-azul{
    font-family: "Plus Jakarta Sans", sans-serif;
    background-color: #384DBB;
    border-radius: 10px;
    border: none;
    width: 24vh;
    height: 6%;
    color: white;

    font-size: 14px;
    font-weight: 600;
    margin: 2vh;

}

.btn-branco{
    font-family: "Plus Jakarta Sans", sans-serif;
    background-color: white;
    border: none;
    border-radius: 20px;
    width: 20vh;
    height:  5%;
    font-size: 14px;
    font-weight: 600;
    margin: 4vh;
} 
.frase-box{
    font-size: 90%;
    margin: 10%;
    text-align: center;
    font-family: 'Karla';
    ;
}

button{
    border-radius: 10px;
    height: 15%;
    width: 90%;
    border: none;
    display: grid;
    place-items: center;
}


.box{
    background-color: #384DBB;
    color: white;
    font-weight: 400;
    border-radius: 10px;
    margin-left: 15%;
    margin-right: 15% ;
    height: 30%;
 
}

.title{
    font-size: 125%;
    text-align: center;
    font-family: "Kantumruy Pro", sans-serif;
    margin-top: 30%;
}
</style>