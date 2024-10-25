<script setup></script>

<template>
    <header></header>
        <img class="foto-perfil" src="../assets/image (2).png" alt="">
        <div class="infos">
            <p class="nome">EDSON BRAND</p>
            <p class="user">user_dedi123_avante</p>
            <p class="matricula">12345678910</p>

            <p class="email">E-mail: branddedi2@gmail.com</p>
            <p class="num">(47) 99701-2881</p>
        

        
            <button>Editar perfil</button>
        
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

header {
    position: absolute;
    background-color: #0F0541;
    height: 50%;
    width: 100%;
    margin-top: 0;
}
.foto-perfil {
    position: relative;
    margin-top: 35%; 
    margin-left: 47%;
    transform: translateX(-45%); 
    }
    .infos{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 18%;
    align-items: center;
    flex-wrap: wrap; 
    margin-top: 7%;
}

p {
    margin: 0;
    white-space: nowrap;
}


.nome {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    display: flex;
    color: #000000;
}

.user {

    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    margin-top: 7%;
    color: #000000;
}

.matricula {

    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    margin-top: 0.5%;
    color: #000000;
}

.email {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    color: #000000;
    margin-top: 60%;
}

.num {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    margin-top: 30%;
    display: flex;
    color: #000000;
}

button {
    display: flex;
    width: 200%;
    padding: 5%;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #091D87;
    border-radius: 5px;
    color: white;
    border: none;
    margin-top: 50%;
    margin-bottom: 10%;
    margin-left: 2%;
}
</style>