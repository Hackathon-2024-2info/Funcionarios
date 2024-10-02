<script setup>
</script>

<template>
<div class="menu">
    <nav>
        <img src="../assets/logo AVANTE.png" alt="" class="img">
        <button class="btn-branco">Estoque</button>
        <button class="btn-azul">Serviço</button>
        <button class="btn-branco">Relatório</button>

        <div class="vazio">

        </div>
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
    grid-template-columns: 16% 1fr;
}
nav{
    background: #0F0541;
    height: 100vh;  margin-bottom: -10%;
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
    position: relative;
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

.vazio{
    padding: 16%;
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
    margin-top: 20%;
}

button{
    border-radius: 10px;
    height: 15%;
    width: 85%;
    border: none;
    display: grid;
    place-items: center;
    color: #546FFF;
    font-family: "Plus Jakarta Sans", sans-serif;
    margin-left: 7%;
    margin-top: 18%;

}


.box{
    background-color: #384DBB;
    color: white;
    font-weight: 400;
    border-radius: 10px;
    margin-left: 15%;
    margin-right: 15% ;
    height: 32%;
    margin-top: -15%;
 
}

.title{
    font-size: 125%;
    text-align: center;
    font-family: "Kantumruy Pro", sans-serif;
    margin-top: 40%;
}
</style>