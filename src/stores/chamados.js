import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChamadoStore = defineStore('chamado', () => {
  const chamados = ref([
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
  ])

  //   function removeProduct(id) {
  //     const index = products.value.findIndex((product) => product.id === id);
  //     products.value.splice(index, 1);
  //   }


//   function getProductById(id) {
//     console.log(id)
//     const foundEstoque = estoques.value.find((estoque) => estoque.id == id);
//     if (!foundEstoque) {
//       console.log("Estoque not found");
//     }
//     return foundEstoque || null;
//   }
  return { chamados }
})
