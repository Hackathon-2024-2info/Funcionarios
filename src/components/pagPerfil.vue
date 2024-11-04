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
        

        
            <RouterLink to="/editperfil"><button>Editar perfil</button></RouterLink>
        
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');



.infos{
    display: flex;
    flex-direction: column; /* Organiza os itens em uma linha */
    width: 30%;
    margin-left: 32%;
    align-items: center; /* Garante que os itens fiquem alinhados no centro verticalmente */
    flex-wrap: wrap; /* Faz com que os itens "quebrem linha" em telas menores */
}
p {
    margin: 0;
    white-space: nowrap; /* Evita quebras de linha dentro do parágrafo */
}


.nome {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    display: flex;
    color: #000000;
}

.user {

    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    display: flex;
    margin-top: 2%;
    color: #000000;
}

.matricula {

    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    display: flex;
    margin-top: 0.5%;
    color: #000000;
}

.email {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    display: flex;
    color: #000000;
    margin-top: 30%;
}

.num {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    margin-top: 2%;
    display: flex;
    color: #000000;
}

button {
    display: flex;
    width: 60%;
    height: 6vh;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #091D87;
    border-radius: 5px;
    color: white;
    border: none;
    margin-top: 20%;
    margin-bottom: 5%;
    margin-left: 1%;
}

@media only screen and (max-device-width: 1500px) {
    
    header {
    position: absolute;
    background-color: #0F0541;
    height: 30%;
    width: 100%;
    margin-top: 0;
}

.foto-perfil {
    position: relative;
    margin-top: 5%; /* Ajusta a imagem para ficar "meio a meio" */
    margin-left: 47%; /* Centraliza horizontalmente */
    transform: translateX(-50%); /* Centraliza de forma perfeita */
}
    }
    
    @media only screen and (max-device-width: 2000px) {
        
        header {
    position: absolute;
    background-color: #0F0541;
    height: 30%;
    width: 100%;
    margin-top: 0;
}

.foto-perfil {
    position: relative;
    margin-top: 8.5%; /* Ajusta a imagem para ficar "meio a meio" */
    margin-left: 47%; /* Centraliza horizontalmente */
    transform: translateX(-50%); /* Centraliza de forma perfeita */
}
        }
        
</style>