import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServicoStore = defineStore('servico', () => {
  const servicos = ref([
    {
      id: 1,
      nome: 'Manutenção preventiva',
      cliente: 'Krona',
      prestadores: 'Edson e fulano',
      prevduracao: '2 dias',
      contatoresponsavel: '(47) 997012881',
      descricao:
        'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdie wuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
      datainicio: '18/09/2024',
      datafinal: '20/09/2024',
      pendencias: 'wdnwuheijfvjjrevinfdjklvcnweiofjweqiocjioejwioe  fj'
    },
    { id: 2,
      nome: 'Manutenção preditiva',
      cliente: 'Focus',
      prestadores: 'Ciclano e fulano',
      prevduracao: '4 dias',
      contatoresponsavel: '(47) 997012881',
      descricao:
        'dhwudhwuidhweuidhwuiedhweuidhewu ihdwieudhiudhweuidhewudhweuhdewuihdiewuhde uhduwehduwehdeuiwhdewuihdew uidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
        datainicio: '18/09/2024',
        datafinal: '20/09/2024',
        pendencias: 'wdnwuheijfvjjrevinfdjklvcnweiofjweqiocjioejwioe  fj' },
    { id: 3,
      nome: 'Manutenção corretiva',
      cliente: 'Plasvale',
      prestadores: 'Edson e Ciclano',
      prevduracao: '7 dias',
      contatoresponsavel: '(47) 997012881',
      descricao:
        'dhwudhwuidhweuidhwuiedhweuidhewuihd wieudhiudhweuidhewudhweuhd ewuihdiewuhdeuhduwehduwehdeuiwhdewuihdewui dheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
        datainicio: '18/09/2024',
        datafinal: '20/09/2024',
        pendencias: 'wdnwuheijfvjjrevinfdjklvcnweiofjweqiocjioejwioe  fj' }
  ])

  //   function removeProduct(id) {
  //     const index = products.value.findIndex((product) => product.id === id);
  //     products.value.splice(index, 1);
  //   }


  function getProductById(id) {
    console.log(id)
    const foundServico = servicos.value.find((servico) => servico.id == id);
    if (!foundServico) {
      console.log("Service not found");
    }
    return foundServico || null;
  }
  return { servicos, getProductById }
})
