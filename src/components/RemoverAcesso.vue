<script setup>

const itens = [
  {
    nome: 'Edson',
    usuario: 'zzzzzzzz',
    cargo: '20pcs',
  },
  {
    nome: 'xxxxxxxx',
    usuario: 'zzzzzz',
    cargo: '3pcs',
  },
  {
    nome: 'xxxxxxxxx',
    usuario: 'zzzzzzzzz',
    cargo: '12pcs',
  },
  {
    nome: 'xxxxxx',
    usuario: 'zzzzzzzzzz',
    cargo: '4pcs',
  },
  {
    nome: 'xxxxxxxx',
    usuario: 'zzzzzzzzz',
    cargo: '2pcs',
  },
  {
    nome: 'xxxxxxxxxx',
    usuario: 'zzzzzzzzzzz',
    cargo: '7pcs',
  },
  {
    nome: 'xxxxxxxxxx',
    usuario: 'zzzzzzzzzzzz',
    cargo: '9pcs',
  },
  {
    nome: 'xxxxxxxxx',
    usuario: 'zzzzzzzzzz',
    cargo: '2pcs',
  },
  {
    nome: 'xxxxxxx',
    usuario: 'zzzzzzzz',
    cargo: '5pcs',
  },
  {
    nome: 'xxxxxxxxx',
    usuario: 'zzzzzzz',
    cargo: '9pcs',
  }
]
</script>

<template>
  <div class="botoes">
    <div class="filtrar">
      <label for="">Filtrar:</label>
      <select name="Selecione" id="Selecione">
        <option value="" class="option">SELECIONE</option>
      </select>
    </div>
    <div class="setas">
      <button style="background: none;"><img src="../assets/esquerda.png" alt="" /></button>
      <p class="numerosetas">1</p>
      <button style="background: none;"><img src="../assets/direita.png" alt="" /></button>
    </div>
  </div>

  <table class="tabela-itens">
    <thead>
      <tr>
        <th>
          <div class="th-content">
            <section class="order-icons">
              <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
            </section>
            <span> Nome </span>
          </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Usuário </span>          
        </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Cargo </span>
        </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Currículo </span>
        </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itens" :key="item.id">
        <td>{{ item.nome }}</td>
        <td>{{ item.usuario }}</td>
        <td>{{ item.cargo }}</td>
        <div><td> <button class="remover"><p>Remover Acesso</p></button></td> </div>
      </tr>
    </tbody>

  </table>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');



.remover{
padding-top: 5%;
padding-bottom: 5%;
padding-left: 3%;
padding-right: 3%;
width: 110%;
background: #091D87;
border-radius: 5px;
color: white;
text-align: center;
}
.tabela {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 5%;
  padding-right: 10%;
  width: 100%;
}

.tabela-itens {

  font-family: 'Roboto', sans-serif;
  font-weight: 450;
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  line-height: 2.5rem;
  margin-left: 30%;

  & td {
    border-bottom: 0.5px solid #d4d2d2;    
   
  }

  & .th-content { 
    display: flex;
    align-items: center; /* Alinha o conteúdo verticalmente */
    justify-content: flex-start; /* Se quiser espaçar igualmente */
  }
}

span{
  margin-left: 5%;}

/* .icons-and-text {
  display: flex;
  flex-direction: row;  
  align-items: center;
  gap: 2%;
} */

.order-icons {
  display: flex;
  flex-direction: column;  

  & img {
    width: 8px;
    height: 8px;
  
  }
}

#main {
  display: flex;
  margin-bottom: 3%;
  margin-top: -77%;
  margin-left: 10%;
}
.numerosetas{
padding:3.5%;
font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-left: 4%;
  padding-right: 4%;
  margin: 5%;
  background: rgb(84, 111, 255, 0.32);

  border-radius: 10px;
  color: black;
}
.setas {
  display: flex;
  margin-left: -5%;
}
.botoes{
  display: grid;
  margin-left: 30%;
  align-items: center;
  grid-template-columns: 40% 40%;
}


select {
  border-radius: 20px;
  border: none;
  background: rgb(84, 111, 255, 0.32);
  color: #8787c7;
  padding: 0.2%;
  padding-left: 2%;
  padding-right: 2%;
  margin-left: 2%;
}
label,
select,
option {
  font-family: 'Karla';
}


button {
  border: none;
  background: white;
}

select {
  border-radius: 20px;
  border: none;
  background: rgb(84, 111, 255, 0.32);
  color: #8787c7;
  padding: 0.2%;
  padding-left: 7%;
  padding-right: 7%;
}

main {
  margin-top: 5%;
}

.option {
  font-size: 17%;
}

ul,
li {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
li {
  list-style: none;
  padding: 5%;
  margin-bottom: 5%;
}
.filtrar,
.setas {
  margin-top: 1%;
}



.linha {
  width: 150%;
  margin-top: 5%;
  margin-bottom: -10%;
}
#ultimalinha {
  width: 100%;
  margin-top: 5%;
  margin-bottom: -10%;
}

/* img {
  display:;
} */
</style>
