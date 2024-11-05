<script setup>
import AbrirCurriculo from '@/components/AbrirCurriculo.vue'
const relatorios = [
  {
    id: 499,
    status: 'Em andamento',
    data: '20/09/2024',
    solicitador: 'Edson'
  },
  {
    id: 500,
    status: 'Concluído',
    data: '20/09/2024',
    solicitador: 'Ciclano'
  },
  {
    id: 501,
    status: 'Concluído',
    data: '20/09/2024',
    solicitador: 'Fulano'
  },
  {
    id: 502,
    status: 'Concluído',
    data: '20/09/2024',
    solicitador: 'Ciclano'
  },
  {
    id: 503,
    status: 'Em aberto',
    data: '20/09/2024',
    solicitador: 'Ciclano'
  }
]
</script>

<template>
  <main>
    <div class="filtrar">
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
            <span> Remetente </span>
          </div>
        </th>
        <th>
          <div class="th-content">
            <section class="order-icons">
              <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
            </section>
            <span>Cargo solicitado </span>
          </div>
        </th>
        <th>
          <div class="th-content">
            <section class="order-icons">
              <img src="../assets/Vector-1.png" alt="" /> <img src="../assets//Vector.png" alt="" />
            </section>
            <span> Data </span>
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
      <tr v-for="relatorio in relatorios" :key="relatorio.id">
        <td>{{ relatorio.id }}</td>
        <td>{{ relatorio.status }}</td>

        <td>{{ relatorio.data }}</td>
        <td>{{ relatorio.solicitador }}</td>
 <AbrirCurriculo/>
        <div class="botoes">
           
          <button class="x-btn">
            <img src="../assets/Icon.png" alt="" />
          </button>
          <button class="btn-azul">Gerar matrícula</button>
        </div>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.botoes {
margin-left: 10%;
}
.x-btn{
    width: 24px;
    height: 24px;
    margin-top: 5%;
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
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  margin-left: 25%;
  line-height: 2.5rem;

  & td {
    border-bottom: 0.5px solid #d4d2d2;
  }

  & td .path-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 50%;
    margin-bottom: 100px; */
  }

  & .th-content {
    display: flex;
    align-items: center;
    /* Alinha o conteúdo verticalmente */
    justify-content: flex-start;
    /* Se quiser espaçar igualmente */
  }
}

/* ja tentei botar essa coisa dentro de td, fora, dentro da chave amarela ali em cima, display flex com justify-content, 
display grid com align itens e NADA FUNCIONAAAAAAAAAAAAAA
.path-detail{
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
margin-bottom: 100px;
} */

span {
  margin-left: 5%;
}

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
    padding: 10%;
  }
}

.btn-azul {
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Karla';
  background-color: #091d87;
  padding: 1.5%;
  padding-left: 2%;
  padding-right: 2%;
  font-weight: 700;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
}

main {
  display: flex;
  margin-bottom: 3%;
  margin-top: -77%;
  width: 100%;
  margin-left: 9%;
}

.setas {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-left: 1%;
  margin-top: -0.4%;
}

label {
  margin-right: 3%;
}

.filtrar {
  flex-wrap: nowrap;
  width: 50%;
  margin-left: 32%;
  padding-top: 1%;
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
  background: #f5f5f5;
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
