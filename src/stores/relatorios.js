import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRelatorioStore = defineStore('relatorio', () => {
  const relatorios = ref([
    {
      id: 1,
      nome: 'Manutenção preventiva',
      cliente: 'Krona',
      remetente: 'Edson',
      descricao:
        'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdie wuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
      datainicio: '18/09/2024',
      dataenvio: '13/09/2024',
      temporealizacao: '12 horas',
      dificuldade: 'Média',
      colaboracao: 'Boa',
      titulo: 'Relatorio krona 12/09',
      pendencias: 'Ckjehue3j euhdouefhje3f 4uihou3fhe3f ui34hfoie3je3e  ui34hfoijlknchjbrfu34'
      
    },
    { 
        id: 2,
        nome: 'Manutenção preventiva',
        cliente: 'Krona',
        remetente: 'Edson',
        descricao:
          'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdie wuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
        datainicio: '18/09/2024',
        dataenvio: '13/09/2024',
        temporealizacao: '12horas',
        dificuldade: 'Média',
        colaboracao: 'Boa',
        titulo: 'Relatorio krona 12/09',
        pendencias: 'ckjehue3j euhdouefhje3f 4uihou3fhe3f ui34hfoie3je3e  ui34hfoijlknchjbrfu34'
        
    },
    { 
        id: 3,
        nome: 'Manutenção preventiva',
        cliente: 'Krona',
        remetente: 'Edson',
        descricao:
          'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdie wuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
        datainicio: '18/09/2024',
        dataenvio: '13/09/2024',
        temporealizacao: '12horas',
        dificuldade: 'Média',
        colaboracao: 'Boa',
        titulo: 'Relatorio krona 12/09',
        pendencias: 'ckjehue3j euhdouefhje3f 4uihou3fhe3f ui34hfoie3je3e  ui34hfoijlknchjbrfu34'
   },
   { 
    id: 4,
    nome: 'Manutenção preventiva',
    cliente: 'Krona',
    remetente: 'Edson',
    descricao:
      'dhwudhwuidhweuidhwuiedhweuidhewuihdwieudhiudhweuidhewudhweuhdewuihdie wuhdeuhduwehduwehdeuiwhdewuihdewuidheuhdwuehdeuihdeuhduewdhweuhweuhdweuh',
    datainicio: '18/09/2024',
    dataenvio: '13/09/2024',
    temporealizacao: '12horas',
    dificuldade: 'Média',
    colaboracao: 'Boa',
    titulo: 'Relatorio krona 12/09',
    pendencias: 'ckjehue3j euhdouefhje3f 4uihou3fhe3f ui34hfoie3je3e  ui34hfoijlknchjbrfu34'
},
  ])

  //   function removeProduct(id) {
  //     const index = products.value.findIndex((product) => product.id === id);
  //     products.value.splice(index, 1);
  //   }


  function getProductById(id) {
    console.log(id)
    const foundRelatorio = relatorios.value.find((relatorio) => relatorio.id == id);
    if (!foundRelatorio) {
      console.log("Service not found");
    }
    return foundRelatorio || null;
  }
  return { relatorios, getProductById }
})
