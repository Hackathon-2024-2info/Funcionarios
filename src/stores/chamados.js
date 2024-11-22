import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChamadoStore = defineStore('chamado', () => {
  const chamados = ref([
    {
        id: 499,
        status: 'Em andamento',
        data: '20/09/2024',
        solicitador: 'Edson',
        descricao: 'djweifjeife wuoefjioefje wejfioefjioeqf uwejfowejfioeq',
        titulo: 'faltando fita isolante'
      },
      {
        id: 500,
        status: 'Concluído',
        data: '20/09/2024',
        solicitador: 'Ciclano',
        descricao: 'djweifjeife wuoefjioefje wejfioefjioeqf uwejfowejfioeq',
        titulo: 'faltando fita isolante'
      },
      {
        id: 501,
        status: 'Concluído',
        data: '20/09/2024',
        solicitador: 'Fulano',
        descricao: 'djweifjeife wuoefjioefje wejfioefjioeqf uwejfowejfioeq',
        titulo: 'faltando fita isolante'
      },
      {
        id: 502,
        status: 'Concluído',
        data: '20/09/2024',
        solicitador: 'Ciclano',
        descricao: 'djweifjeife wuoefjioefje wejfioefjioeqf uwejfowejfioeq',
        titulo: 'faltando fita isolante'
      },
      {
        id: 503,
        status: 'Em aberto',
        data: '20/09/2024',
        solicitador: 'Ciclano',
        descricao: 'djweifjeife wuoefjioefje wejfioefjioeqf uwejfowejfioeq',
        titulo: 'faltando fita isolante'
      }
  ])

  //   function removeProduct(id) {
  //     const index = products.value.findIndex((product) => product.id === id);
  //     products.value.splice(index, 1);
  //   }


  function getProductById(id) {
    console.log(id)
    const foundChamado = chamados.value.find((chamado) => chamado.id == id);
    if (!foundChamado) {
      console.log("Estoque not found: " + id);
    }
    return foundChamado || null;
  }
  return { chamados, getProductById }
})
