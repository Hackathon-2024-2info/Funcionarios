<script setup></script>

<template>
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

.espaçamento {
  margin-left: 27%;
  margin-top: 20%;
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
/*ARRUMARRRRRRRRRRRRRRR*/
@media only screen and (max-device-width: 420px) { 


  .espaçamento {
    margin-left: 10%;
    margin-top: 50%;
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
    font-size: 12px;
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
