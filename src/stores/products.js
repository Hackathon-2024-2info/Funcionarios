import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServicoStore = defineStore('servicos', () => {
  const servicos = ref([
    {
      id: 1,
      nome: 'Manutenção preventiva',
      cliente: 'Krona',
      prestadores: 'Edson e fulano',
      prevduração: '2 dias',
      contatoresponsavel: '(47) 997012881',
      descrição:
        'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdiewuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh'
    },
    { id: 2, nome: 'Produto 2', price: 29.99 },
    { id: 3, nome: 'Produto 3', price: 39.99 }
  ])

  //   function removeProduct(id) {
  //     const index = products.value.findIndex((product) => product.id === id);
  //     products.value.splice(index, 1);
  //   }
  return { servicos }
})
