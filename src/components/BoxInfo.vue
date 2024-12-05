<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useServicoStore } from '../stores/servicos.js';




const props = defineProps(['id']);
const servicoStore = useServicoStore();
const authStore = useAuthStore()
const servico = ref({})








onMounted(() => {
  servico.value = servicoStore.getProductById(props.id)
})




</script>




<template>
  <main>
    <div class="espaçamento">
      <div class="box">
        <img src="../assets/Video Task.png" alt="mapaDps" />
        <p class="titulo">{{ servico.nome }}</p>
        <div class="minicontainer">
          <p>{{ servico.cliente }}</p>
        </div>
        <div class="infos">
          <p>Prestadores: {{ servico.prestadores }}</p>
          <p v-if="!authStore.user.is_admin">Previsão de duração: {{ servico.prevduracao }}</p>
          <p v-if="!authStore.user.is_admin">Contato do responsável pela máquina: {{ servico.contatoresponsavel }}</p>
          <p class="descricao" v-if="!authStore.user.is_admin">
            Descrição: {{ servico.descricao }}
          </p>
          <p v-if="authStore.user.is_admin">Data de início: {{ servico.datainicio }}</p>
          <p v-if="authStore.user.is_admin">Data de finalização: {{ servico.datafinal }}</p>
          <p v-if="authStore.user.is_admin">Pendências: {{ servico.pendencias }}</p>
          <div class="teste">
            <RouterLink to="/detalherelatorio"><button v-if="authStore.user.is_admin" id="visurelatorio">Visualizar
                relatório</button></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');






#visurelatorio {
  font-family: 'Karla';
  color: white;
  background-color: #180577;
  width: 80%;
  height: 7vh;
  font-size: 18px;
  font-weight: 700;
  border-radius: 20px;
  border-color: rgba(217, 217, 217, 0);
}




.teste {
  display: flex;
  justify-content: end;


}




main {
  background-color: #f5f5f5;
  height: 120vh;
  margin-left: 32%;
  position: absolute;
  top: 20%;
}






.espaçamento {
  display: grid;
  margin-right: 0px;
}




.box {
  display: flex;
  flex-wrap: wrap;
  width:80%;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 7%;
  margin-right: 0px;
  height: 95%;
}




.box img {
  width: 100%;
  height: auto;
}




.titulo {
  object-fit: contain;
  white-space: nowrap;
  margin-top: 3.5%;
  margin-bottom: 2%;
  font-family: 'Kantumruy Pro';
  font-weight: 700;
  margin-left: 5%;
  font-size: 32px;
  display: flex;
  color: #091d87;
  text-transform: uppercase;
}




.minicontainer {
  width: 50%;
  margin-left: 5%;
  height: 3.5%;
  background: rgba(56, 77, 187, 0.4);
  border-radius: 20px;
  margin-bottom: 2%;
}




.minicontainer p {
  display: flex;
  object-fit: contain;
  font-family: 'Readex Pro';
  padding-top: 0.7%;
  padding-left: 40%;
}




.infos {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  margin-left: 5%;
  margin-bottom: 5%;
  padding-right: 5%;
}




.infos p {
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  margin-bottom: 2%;
}


.descricao {
  line-height: 110%;
  width: 75%;
  word-wrap: break-word;
}








@media only screen and (max-device-width: 480px) {






  main {
    background-color: #f5f5f5;
    height: 154vh;
    margin-top: 0%;
    margin-left: -3%;
  }


  #visurelatorio {
    font-family: 'Karla';
    color: white;
    background-color: #180577;
    width: 120%;
    height: 4.5vh;
    font-size: 10px;
    font-weight: 700;
    border-radius: 20px;
    border-color: rgba(217, 217, 217, 0);
  }




  .teste {
    display: flex;
    justify-content: start;
    margin-bottom: 30%;
  }




  .box {
    display: flex;
    flex-wrap: wrap;
    width: 48%;
    height: 70%;
    background: #ffffff;
    border-radius: 10px;
    margin-top: 7%;
    margin-left: 3%;




  }




  p {
    font-size: 17px;
  }




  img {
    width: 100%;
    height: auto;
  }


  .espaçamento {
    display: grid;
    margin-left: 1%;
  }


  .titulo {
    margin-top: 4%;
    font-size: 22px;
    font-family: 'Kantumruy Pro';
  }




  .minicontainer {
    width: 70%;
    margin-left: 5%;
    height: 4%;
    margin-top: 2%;
  }




  .minicontainer p {
    margin-top: -1%;
    font-weight: 400;
    font-size: 20px;
  }




  .infos {
    line-height: 100%;
    margin-left: 5%;
    padding-right: 5%;
    margin-top: 5%;
  }




  .infos p {
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    word-wrap: break-word;
    width: 45%;
  }


  .descricao {
    line-height: 110%;
    word-wrap: break-word;
    width: 60%;
  }




}
</style>

