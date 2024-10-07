<script setup></script>

<template>
  <main>
    <div class="espaçamento">
      <h1>VERIFICAÇÕES PREVENTIVAS</h1>
      <div class="container-inputs-num">
        <div class="num">
          <label for="">Paralelismo</label>
          <div class="input-num">
            <input type="number" placeholder="Esquerdo" />
            <input type="number" placeholder="Direito" />
            <input type="number" placeholder="Esquerdo" />
            <input type="number" placeholder="Direito" />
          </div>
        </div>
        <div class="num">
          <label for="">Estiramento</label>
          <div class="input-num">
            <input type="number" placeholder="Esquerdo" />
            <input type="number" placeholder="Direito" />
            <input type="number" placeholder="Esquerdo" />
            <input type="number" placeholder="Direito" />
          </div>
        </div>
      </div>
      <div class="container-checkbox">
        <div class="checkbox">
          <label for="">Limpeza e organização dos equipamentos:</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Testes dos movimentos (injeção, dosagem, fechamento, extrator):</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Funcionamento da segurança (NR12):</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Funcionamento do manipulador:</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Funcionamento do alimentador:</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Existe ruído anormal no aparelho?:</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Aparelho em condições seguras para operar:</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
        <div class="checkbox">
          <label for="">Aquecimento conforme programado:</label>
          <input type="checkbox" />
          <span>Sim</span>
          <input type="checkbox" />
          <span>Não</span>
        </div>
      </div>
      <button>Próximo</button>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

main {
  background-color: #F5F5F5;
  height: 100vh;
}

.espaçamento {
  margin-left: 20%;
  margin-top: 10%;
}

h1 {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 18px;
  color: #180577;
  margin-bottom: 3%;
}

.container-inputs-num {
  display: flex;
  gap: 10%;
}

.num {
  display: inline-block;
}

.input-num {
  display: grid;
  grid-template-columns: repeat(2, 100px);
  /* Duas colunas de 10px cada */
  column-gap: 2%;
  row-gap: 2%;
}

input[type="number"] {
  height: 56px;
  border: none;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  text-align: center;
}

label,
span {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #666666;
}

.checkbox label {
  display: flex;
  max-width: 30%;
  display: inline-block;
  vertical-align: top;
  /* Garante que o input não seja afetado pela quebra de linha */
}

.checkbox {
  margin-bottom: 3%;
}

input[type="checkbox"] {
  margin-left: 5%;
  width: 18px;
  height: 18px;
}

span {
  margin-left: 1%;
}

.container-checkbox {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1% 5%;
  background: #091D87;
  border-radius: 5px;
  border: none;
  color: white;
  margin-bottom: 2%;
}
</style>
