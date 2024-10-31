<script setup>
import { ref } from 'vue'
const servicos = ref([
  {
    id: 1,
    texto: 'Limpeza e organização dos equipamentos',
    valor: false
  },
  {
    id: 2,
    texto: 'Testes dos movimentos (injeção, dosagem, fechamento, extrator)',
    valor: false
  },
  {
    id: 3,
    texto: 'Funcionamento da segurança (NR12)',
    valor: false
  },
  {
    id: 4,
    texto: 'Funcionamento do manipulador',
    valor: false
  },
  {
    id: 5,
    texto: 'Funcionamento do alimentador',
    valor: false
  },
  {
    id: 6,
    texto: 'Existe ruído anormal no aparelho?',
    valor: false
  },
  {
    id: 7,
    texto: 'Aparelho em condições seguras para operar',
    valor: false
  },
  {
    id: 8,
    texto: 'Aquecimento conforme programado',
    valor: false
  }
])
</script>

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
        <template v-for="servico in servicos" :key="servico.id">
          <label class="label-pergunta" for="">{{ servico.texto }}:</label>
          <span class="teste">
            <input type="radio" id="ok" v-model="servico.valor" :value="true" />
            <label for="ok">Sim</label>
          </span>
          <span class="teste">
            <input type="radio" id="nok" v-model="servico.valor" :value="false" />
            <label for="nok">Não</label>
          </span>
        </template>
      </div>
      <div class="botao">
      <button>Próximo</button>
    </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

main {
  background-color: #f5f5f5;
  margin-top: -65%;
}

.espaçamento {
  margin-left: 25%;
}

.label-pergunta {
  margin-bottom: 10%;
}

span {
  margin-top: -16%;
}

span label {
  margin-left: 10%;
  gap: 10%;
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

input[type='number'] {
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

.checkbox {
  margin-bottom: 3%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

input[type='radio'] {
  margin-left: 5%;
  width: 24px;
  height: 24px;

}

.container-checkbox {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  /* flex-direction: column; */
  margin-top: 3%;
  width: 50%;
}

.container-checkbox span {
  display: flex;
  align-items: center;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1% 5%;
  background: #091d87;
  border-radius: 5px;
  border: none;
  color: white;
  margin-bottom: 2%;
  margin-top: 3%;
}


@media only screen and (max-device-width: 480px) {
  main {
  background-color: #f5f5f5;
  margin-top: 10%;
}

.espaçamento {
  margin-left: 5%;
}
.label-pergunta {
  margin-bottom: 10%;
  width:200%;
}

span {
  margin-top: -16%;
  margin-left: 150px;
}

span label {

}

h1 {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 26.5px;
  color: #180577;
  margin-bottom: 3%;
  margin-left: 5%;
}

.container-inputs-num {
  display: flex;
  gap: 20%;
  margin-left: 5%;
  margin-top: 10%;
}

.num {
  display: inline-block;
}

.input-num {
  display: grid;
  grid-template-columns: repeat(2, 80px);
  /* Duas colunas de 10px cada */
  column-gap: 2%;
  row-gap: 2%;
  margin-top: 10%;
}

input[type='number'] {
  height: 60px;
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

.checkbox {
  margin-bottom: 3%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

input[type='radio'] {
  margin-left: 5%;
  width: 24px;
  height: 24px;

}

.container-checkbox {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  /* flex-direction: column; */
  margin-top: 3%;
  width: 50%;
  margin-left: 5%;
}

.container-checkbox span {
  display: flex;
  align-items: center;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2% 10%;
  background: #091d87;
  border-radius: 5px;
  border: none;
  color: white;
  margin-bottom: 2%;
  margin-top: 3%;
}
.botao{
  display: flex;
  justify-content: center;
}
}
</style>
