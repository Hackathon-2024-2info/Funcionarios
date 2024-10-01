<script setup></script>

<template>
    <div class="espaçamento">
        <div class="container">
            <img class="foto-perfil" src="../assets/image (2).png" alt="">
            <div class="nome-user-e-matricula">
                <p class="nome">EDSON BRAND</p>
                <p class="user">user_dedi123_avante</p>
                <p class="matricula">12345678910</p>
            </div>
        </div>


    </div>
</template>

<style scoped>

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
    display: block;
    margin-left: 43%;
    margin-top: 2%;
}
.nome{
font-family: 'Readex Pro';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;

color: #000000;


}
</style>