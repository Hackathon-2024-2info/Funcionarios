<script setup>
import { onMounted, ref } from 'vue'
// import { useAuthStore } from '@/stores/auth';
import { useRelatorioStore } from '@/stores/relatorios.js';

const props = defineProps(['id']);
const relatorioStore = useRelatorioStore();
// const authStore = useAuthStore()
const relatorio = ref({})


onMounted(() => {
  relatorio.value = relatorioStore.getProductById(props.id)
})
</script>

<template>
    <main>
        <div class="botaozinho">
            <RouterLink to="/relatoriosadmin"><img class="img" src="@/assets/🦆 icon _Chevron left alt (line)_.png" alt=""></RouterLink>
        </div>
        <div class="texts">
            <h1> {{relatorio.titulo}}</h1>
            <p>Remetente: {{relatorio.remetente}}</p>
            <p class="chamado">Relatório enviado em: {{relatorio.dataenvio}}</p>
            <p class="tempo">Tempo de realização do serviço: {{relatorio.temporealizacao}}</p>
            <p class="dificuldade">Dificuldade do serviço: {{relatorio.dificuldade}}</p>
            <p class="colaborar">Colaboração da empresa: {{relatorio.colaboracao}}</p>
            <p class="pendente">Possíveis pendências que ficaram na máquina: {{ relatorio.pendencias }}
            </p>
            <div class="espaco"></div>
            <p class="descricao">Descrição: {{ relatorio.descricao }}
            </p>

        </div>

        <section class="container">
            <div class="container-carrosel">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
            </div>
        </section>

    </main>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');


.espaco {
    margin-top: 10%;
}

.botaozinho {
    position: absolute;
    top: 28%;
    left: 20%;
    width: 3%;
    height: 5.5%;
    background: rgba(84, 111, 255, 0.32);
    border-radius: 10px;
}


.container {
    position: absolute;
    width: 22%;
    right: 2%;
    top: 27%;
    padding: 1%;
    background-color: #ececec;
    border-radius: 20px;
}

.container-carrosel {
    margin-top: 10%;
    width: 320px;
    height: 680px;
    overflow-y: scroll;
    background: #ececec;
    display: flex;
    flex-direction: column;
    gap: 5%;
    margin-left: 10%;
}

.container-carrosel::-webkit-scrollbar {
    width: 0.7vw;
    width: 10px;
}

.container-carrosel::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;

}

.container-carrosel::-webkit-scrollbar-thumb {
    background-color: #6e78ff;
    width: 3%;
    border-radius: 4px;
}



.img {
    position: relative;
    display: flex;
    margin-left: 33%;
    margin-top: 22%;
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
    margin: 10%;
    width: 50%;
    height: 30%;
    margin-left: 20%;
    margin-top: -86%;
}

.texts .descricao,
.pendente {
    line-height: 110%;
    word-wrap: break-word
}

.texts .chamado ,  .tempo , .dificuldade{
    margin-left: 10%;
}

.descricao {
    margin: 10%;
    margin-top: -4%;

}


p {
    margin-left: 10%;
    font-family: 'Karla';
    line-height: 400%;
    color: #000000;
    font-weight: 400;
    font-size: 18px;
}
</style>