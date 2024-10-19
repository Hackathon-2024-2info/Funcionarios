<script setup>
const itens = [
  {
    id: 499,
    nome: 'Cano 20x10cm',
    quantidade: '20pcs',
    marca: 'Tigre'
  },
  {
    id: 500,
    nome: 'Chave de fenda tipo A',
    quantidade: '3pcs',
    marca: 'Phillips'
  },
  {
    id: 501,
    nome: 'Fio preto 2m',
    quantidade: '12pcs',
    marca: 'Tio Kleber'
  },
  {
    id: 502,
    nome: 'Fita isolante',
    quantidade: '4pcs',
    marca: '3M'
  },
  {
    id: 503,
    nome: 'Fuso máquina injetora',
    quantidade: '2pcs',
    marca: 'Tio Cacau'
  },
  {
    id: 504,
    nome: 'Registro 4 bocas',
    quantidade: '7pcs',
    marca: 'Krona'
  },
  {
    id: 505,
    nome: 'Registro 7 bocas',
    quantidade: '9pcs',
    marca: 'Tuppaware'
  },
  {
    id: 506,
    nome: 'Registro',
    quantidade: '2pcs',
    marca: 'Zagonel'
  },
  {
    id: 506,
    nome: 'Máquina',
    quantidade: '5pcs',
    marca: 'Eletrolux'
  },
  {
    id: 507,
    nome: 'Máquina',
    quantidade: '9pcs',
    marca: 'Brastemp'
  }
]
</script>

<template>
  <main>
    <div class="filtrar">
      <button class="btn-azul">SOLICITAR ITEM PARA O ESTOQUE</button>
      <label for="">Filtrar:</label>
      <select name="Selecione" id="Selecione">
        <option value="" class="option">SELECIONE</option>
      </select>
    </div>
    <div class="setas">
      <button><img src="../assets/esquerda.png" alt="" /></button>
      <p>1</p>
      <button><img src="../assets/direita.png" alt="" /></button>
    </div>
  </main>

  <table class="tabela-itens">
    <thead>
      <tr>
        <th>
          <div class="th-content">
            <section class="order-icons">
              <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
            </section>
            <span> Código do item </span>
          </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Nome do item </span>          
        </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Quantidade </span>
        </div>
        </th>
        <th>
          <div class="th-content">
          <section class="order-icons">
            <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
          </section>
          <span> Marca do item </span>
        </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itens" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.nome }}</td>
        <td>{{ item.quantidade }}</td>
        <td>{{ item.marca }}</td>
      </tr>
    </tbody>

  </table>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body{
  color: #F5F5F5;
}
.tabela {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 5%;
  padding-right: 10%;
}

.tabela-itens {

  font-family: 'Roboto', sans-serif;
  font-weight: 450;
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
    margin-left: 5%;
  line-height: 2.5rem;

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

.btn-azul {
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Karla';
  background-color: #091d87;
  padding: 1.5%;
  padding-left: 5%;
  padding-right: 5%;
  font-weight: 700;
  margin-left: 10%;
  margin-right: 10%;
}

main {
  display: flex;
  margin-bottom: 3%;
}

.setas {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-left: -5%;
  margin-top: -0.4%;
}

label {
  margin-right: 3%;
}
.filtrar {
  flex-wrap: nowrap;
  width: 100%;
}

label,
select,
option {
  font-family: 'Karla';
}
p {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-left: 2%;
  margin-right: 2%;
  background: rgb(84, 111, 255, 0.32);
  padding: 1.9%;
  border-radius: 10px;
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
  padding-left: 2%;
  padding-right: 2%;
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
