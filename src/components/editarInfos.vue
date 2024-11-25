<script setup></script>

<template>
    <header></header>
        <img class="foto-perfil" src="../assets/image (3).png" alt="">
        <div class="infos">
            <p class="nome">EDSON BRAND</p>
            <p class="user">user_dedi123_avante</p>
            <p class="matricula">12345678910</p>
        </div>
        <div class="espaçamento">
    <div class="formulario">
      <form action="">
        <label>Editar telefone</label>
        <input type="text" placeholder="Insira seu novo telefone" />
        <label for="">Editar e-mail</label>
        <input type="email" placeholder="Insira seu novo e-mail" />
        <label>Editar senha</label>
        <input type="text" placeholder="Insira sua nova senha" />
        <input class="confirmar-senha" placeholder="confirme sua nova senha" />
      </form>
    </div>
    <button>concluir</button>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

.espaçamento{
  margin-left: 28%;
  margin-top: 3%;
}
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
    margin-top: 8%; /* Ajusta a imagem para ficar "meio a meio" */
    margin-left: 47%; /* Centraliza horizontalmente */
    transform: translateX(-50%); /* Centraliza de forma perfeita */
}
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

.formulario {
  display: grid;
  grid-template-columns: 25% 1fr 25%;
}

input {
  width: 578px;
  height: 46px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  margin: 0;
  padding-left: 2%;
}

label {
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

.confirmar-senha {
  margin-top: 5%;
}

button {
  display: flex;
  background-color: #091d87;
  border-radius: 5px;
  font-family: 'Karla';
  display: inline;
  padding: 1% 2%;
  width: 230px;
  font-size: 16px;
  color: white;
  border: none;
  white-space: nowrap;
  text-decoration: none;
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 15%;
}
@media only screen and (max-width: 768px) {
    header {
    position: absolute;
    background-color: #0F0541;
    height: 40%;
    width: 100%;
    margin-top: 0;
}
.foto-perfil {
    position: relative;
    margin-top: 16%; 
    margin-left:47%;
    transform: translateX(-45%); 
    }
    .infos{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 33%;
    align-items: center;
    flex-wrap: wrap; 
    margin-top: 2%;
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
.espaçamento{
  margin-left: 13%;
}
button {
  display: flex;
  background-color: #091d87;
  border-radius: 5px;
  font-family: 'Karla';
  display: inline;
  padding: 1% 2%;
  width: 230px;
  font-size: 16px;
  color: white;
  border: none;
  white-space: nowrap;
  text-decoration: none;
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 24%;
}
}

@media only screen and (max-device-width: 480px) { 
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
    margin-left: 25%;
    align-items: center; /* Garante que os itens fiquem alinhados no centro verticalmente */
    flex-wrap: wrap; /* Faz com que os itens "quebrem linha" em telas menores */
}

  .espaçamento {
    margin-left: 10%;
    margin-top: 5%;
  }

  .formulario {
    display: grid;
    grid-template-columns: 25% 1fr 25%;
  }

  input {
    display: flex;
    width: 350%;
    height: 30%;
    background: rgba(217, 217, 217, 0.43);
    border-radius: 5px;
    border: none;
    margin: 0;
    padding-left: 2%;
    margin-right: 10%;
  }

  label {
    display: flex;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    color: #000000;
    text-align: center;
    margin-top: 15%;
    margin-bottom: 15%;
  }

  .confirmar-senha {
    display: flex;
    margin-top: 15%;
  }

  button {
    margin-left: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #091D87;
    border-radius: 5px;
    border: none;
    color: white;
    margin-top: 65%;
    margin-bottom: 20%;
    width: 70%;
    padding: 3%;
  }
}

</style>
