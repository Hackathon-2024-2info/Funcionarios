<script setup>
const tiposervico = [
  {
    id: 1,
    nome: 'manutenção preventiva'
  },
  {
    id: 2,
    nome: 'manutenção blablabla'
  }
]
</script>

<template>
  <main>
    <div class="container-um">
      <h1>Orçamento Outubro</h1>
      <p class="quantia">Quantia disponível</p>
      <p class="num">R$2,478</p>
    </div>
    <div class="container-input">
      <label class="tipo-label-um" for="">Retirada do caixa:</label>
      <input class="tipo-input-um" type="num" placeholder="Insira o valor aqui" />
      <div class="botaozinho">
        <img src="../assets/Vector.png" alt="" />
      </div>
    </div>
    <div class="container-input-dois">
      <label class="tipo-label-um" for="">Investimento para a caixa:</label>
      <input class="tipo-input-um" type="num" placeholder="Insira o valor aqui" />
      <div class="botaozinho">
        <img src="../assets/Vector.png" alt="" />
      </div>
    </div>

    <div class="container-dois">
      <h1>Estipular orçamento</h1>
      <div class="row">
        <label class="tipo-label-dois" for="">Tipo serviço:</label>
        <select v-model="tiposervico">
          <option value="" disabled>Selecione um serviço</option>
          <option v-for="servico in tiposervico" :key="servico.id" :value="servico.nome">
            {{ servico.nome }}
          </option>
        </select>
      </div>
      <div class="row">
        <label class="tipo-label-dois"  for="">Valor adicional <br>(opcional):</label>
        <input class="tipo-input-dois" type="num" placeholder="Insira aqui" />
      </div>
      <div class="row">
        <label class="tipo-label-dois"  for="">Desconto<br> (opcional):</label>
        <input class="tipo-input-dois"  type="num" placeholder="Insira aqui" />
      </div>
      <p class="num-dois">R$2,478</p>
      <button>Calcular</button>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

main {
  height: 130vh;
}

.container-um {
  position: absolute;
  width: 75%;
  height: 20%;
  margin-left: 20%;
  margin-top: 15%;
  background: #384dbb;
  border-radius: 24px;
}
.container-input {
  position: absolute;
  width: 18%;
  height: 11%;
  margin-left: 38%;
  margin-top: 28%;
  background: #d9d9d9;
  border-radius: 20px;
}
.container-input-dois {
  position: absolute;
  width: 18%;
  height: 11%;
  margin-left: 59%;
  margin-top: 28%;
  background: #d9d9d9;
  border-radius: 20px;
}

.container-dois {
  position: absolute;
  width: 39%;
  height: 43%;
  margin-left: 38%;
  margin-top: 37%;
  background: #384dbb;
  border-radius: 24px;
}

.container-um h1 {
  display: flex;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 22px;
  margin-left: 10%;
  margin-top: 3.5%;
}
.quantia {
  margin-left: 10%;
  margin-top: 1.5%;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.num {
  display: flex;
  justify-content: end;
  margin-top: -4%;
  margin-right: 5%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
}

.num-dois {
  display: flex;
  justify-content: end;
  margin-top: -20%;
  margin-right: 5%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15%;
}

p,
h1 {
  color: white;
}

.tipo-label-um {
  display: flex;
  font-family: 'Inter';
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
  margin-top: 4%;
  margin-left: 10%;
}

.tipo-input-um {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1% 7%;
  margin-top: 2.5%;
  margin-left: 10%;
  width: 144px;
  height: 26px;
  background: rgba(84, 111, 255, 0.32);
  border-radius: 5px;
  border: none;
}
.tipo-input-um ::placeholder {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #180577;

}

.botaozinho {
  display: flex;
  width: 10%;
  height: 30%;
  background: rgba(84, 111, 255, 0.32);
  border-radius: 10px;
  margin-left: 80%;
  margin-top: -10%;
}
img {
  display: flex;
  margin-left: 20%;
  margin-top: 10%;
}

.container-dois h1 {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 22px;
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-left: 7%;
  margin-bottom: 7%;
}

.tipo-input-dois{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5% 7%;
  background: rgba(84, 111, 255, 0.32);
  border-radius: 5px;
  border: none;
  width: 148px;
  height: 16px;
  background: rgba(217, 217, 217, 0.38);
  border-radius: 20px;
  border: none;
  margin-left: 20%;
  margin-top: -5%;
}

select{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2% 20.5%;
  background: rgba(84, 111, 255, 0.32);
  border-radius: 5px;
  border: none;
  width: 148px;
  height: 16px;
  background: rgba(217, 217, 217, 0.38);
  border-radius: 20px;
  border: none;
  margin-left: 20%;
  margin-top: -3%;
}

.tipo-label-dois {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2%;
}

.row {
  margin-bottom: 5%;
  margin-left: 7%;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3% 5%;
  gap: 10px;
  height: 28px;
  left: 711px;
  right: 641px;
  top: calc(50% - 28px / 2 + 215px);
  background: #091d87;
  border-radius: 5px;
  border: none;
  color: white;
  font-family: 'Karla';
  font-weight: 700;
  font-size: 14px;
  margin-left: 25%;
}

</style>
