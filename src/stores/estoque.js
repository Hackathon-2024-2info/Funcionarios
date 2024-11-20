import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEstoqueStore = defineStore('estoque', () => {
  const estoques = ref([
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
  return { estoques}
})
