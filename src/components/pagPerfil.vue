<script setup></script>

<template>
        <div class="container">
            <img class="foto-perfil" src="../assets/image (2).png" alt="">
            <div class="nome-user-e-matricula">
                <p class="nome">EDSON BRAND</p>
                <p class="user">user_dedi123_avante</p>
                <p class="matricula">12345678910</p>
            </div>
        <div class="email-e-num">
            <p class="email">E-mail: branddedi2@gmail.com</p>
            <p class="num">(47) 99701-2881</p>
        </div>

        <div>
            <button>Editar perfil</button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

.container {
    position: absolute;
    background-color: #0F0541;
    height: 30%;
    width: 100%;
}

.foto-perfil{
    position: relative;
    display: flex;
    width: auto;
    margin-left: 40%;
    margin-top: 5%
}

.nome-user-e-matricula{
    position: relative;
    display: block;
    margin-top: 1%;
    text-align: center;
    line-height: 100%;
}
.nome{
font-family: 'Readex Pro';
font-style: normal;
font-weight: 600;
font-size: 32px;
margin-left:38.5%;
display: flex;
color: #000000;
}
.user{

font-family: 'Karla';
font-style: normal;
font-weight: 300;
font-size: 20px;
display: flex;
margin-left:40%;
margin-top: 2%;
color: #000000;
}
.matricula{

font-family: 'Karla';
font-style: normal;
font-weight: 300;
font-size: 20px;
display: flex;
margin-left:43%;
margin-top: 0.5%;
color: #000000;
}

.email-e-num{
    margin-left: -5%;
    text-align: center;
    margin-top: 10%;
    line-height: 150%;
}

.email{
    font-family: 'Karla';
font-style: normal;
font-weight: 300;
font-size: 20px;
display: flex;
}

.num{
    font-family: 'Karla';
font-style: normal;
font-weight: 300;
font-size: 20px;
display: flex;
}

button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 40px;
gap: 10px;
background: #091D87;
border-radius: 5px;
color: white;
border: none;
margin-top: 10%;
margin-left: 41.5%;
}
</style>