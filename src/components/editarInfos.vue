<script setup></script>

<template>
    <div class="formulario">
        <form action="">
        <label>Editar telefone</label>
        <input type="text" placeholder="Insira seu novo telefone">
        <label for="">Editar e-mail</label>
        <input type="email" placeholder="Insira seu novo e-mail">
        <label>Editar senha</label>
        <input type="text" placeholder="Insira sua nova senha">
        <input class="confirmar-senha" placeholder="confirme sua nova senha">
    </form>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

.formulario {
  display: grid;
  grid-template-columns: 25% 1fr 25%
  
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
</style>