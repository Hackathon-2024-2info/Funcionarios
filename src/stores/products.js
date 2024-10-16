import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServicoStore = defineStore('servico', () => {
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
    { id: 2,
      nome: 'Manutenção preditiva',
      cliente: 'Focus',
      prestadores: 'Ciclano e fulano',
      prevduração: '4 dias',
      contatoresponsavel: '(47) 997012881',
      descrição:
        'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdiewuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh' },
    { id: 3,
      nome: 'Manutenção corretiva',
      cliente: 'Plasvale',
      prestadores: 'Edson e Ciclano',
      prevduração: '7 dias',
      contatoresponsavel: '(47) 997012881',
      descrição:
        'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdiewuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh' }
  ])

  //   function removeProduct(id) {
  //     const index = products.value.findIndex((product) => product.id === id);
  //     products.value.splice(index, 1);
  //   }


  function getProductById(id) {
    const foundServico = servicos.value.find((servico) => servico.id == id);
    if (!foundServico) {
      console.log("Service not found");
    }
    return foundServico || null;
  }
  return { servicos, getProductById }
})
