<script setup>
import { onMounted, ref } from 'vue'
// import { useAuthStore } from '@/stores/auth';
import { useChamadoStore } from '@/stores/chamados.js';

const props = defineProps(['id']);
const chamadoStore = useChamadoStore();
// const authStore = useAuthStore();
const chamado = ref({});

onMounted(() => {
    console.log('prop id: '+ props.id)
    chamado.value = chamadoStore.getProductById(props.id)
})

</script>

<template>
    <main>
        <div class="botaozinho">
            <RouterLink to="/chamadosadmin"><img src="@/assets/🦆 icon _Chevron left alt (line)_.png" alt=""></RouterLink>
        </div>
        <div class="texts" :key="props.id">
            <h1>{{chamado.titulo}}</h1>
            <p>{{chamado.solicitador}}</p>
            <p class="chamado">{{chamado.data}}</p>
            <p class="descricao">{{ chamado.descricao }}
            </p>
        </div>
        <div>
        <button>Marcar como conluído</button>
    </div>
</main>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

.botaozinho {
    position: absolute;
    top: 28%;
    left: 20%;
    width: 51px;
    height: 43px;
    background: rgba(84, 111, 255, 0.32);
    border-radius: 10px;
}

img {
    position: relative;
    display: flex;
    margin-left: 33%;
    margin-top: 21%;
}

h1 {
    display: flex;
    position: absolute;
    top: 29%;
    left: 37%;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #000000;
}

.texts {
    width: 50%;
    height: 30%;
    margin-left: 20%;
    margin-top: -90%;
}

p {
    font-family: 'Karla';
    line-height: 400%;
    color: #000000;
    font-weight: 400;
    font-size: 18px;
}

.texts .descricao {
    line-height: 110%;
    word-wrap: break-word
}
.chamado{
    margin-bottom: 2.5%;
}
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1% 2%;
  background: #091d87;
  border-radius: 5px;
  border: none;
  color: white;
  margin-left: 37%;
  margin-top: 5%;
  margin-bottom: 5%;
}
@media only screen and (max-device-width: 480px) {
    .texts {
    width: 50%;
    height: 30%;
    margin-left: 12%;
    margin-top: 30%;
}
.botaozinho {
    position: absolute;
    top: 28%;
    left: 10%;
    width: 51px;
    height: 43px;
    background: rgba(84, 111, 255, 0.32);
    border-radius: 10px;
}

img {
    position: relative;
    display: flex;
    margin-left: 33%;
    margin-top: 21%;
}

h1 {
    display: flex;
    position: absolute;
    top: 29%;
    left: 27%;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #000000;
}
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3% 10%;
  background: #091d87;
  border-radius: 5px;
  border: none;
  color: white;
  margin-left: 25%;
  margin-top: 10%;
  margin-bottom: 5%;
}
}
</style>