<template>
    <div class="espacing" @click="openFileSelection">
        <fieldset class="arquivo">
            <div class="archive-input">
                <input type="file" @change="handleFileChange" accept=".zip,.tar,.tar.gz, .pdf, .txt" ref="fileInput"
                    style="display: none" />
                <button @click="triggerFileInput" class="icon-button">
                    <i class="fas fa-file-archive"> <img src="@/assets/iconimage.png" alt="" id="imagelogo"></i> <!-- Example icon -->
                </button>
                <div id="arquive-selected" v-if="fileName">Arquivo Selecionado: {{ fileName }}</div>
            </div>
            <h6>INSIRA SEU CURRÍCULO</h6>
            <h4>Insira o arquivo do seu currículo</h4>
        </fieldset>
    </div>
</template>

<script setup>
  import { ref } from 'vue'

  const fileName = ref('')
  const fileInput = ref(null)

  function openFileSelection() {
    fileInput.value.click()
  }

  function handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        fileName.value = file.name;
      }
    }
  function triggerFileInput() {
      fileInput.value.click(); // Trigger the hidden file input
    }
</script>

<style scoped>

.icon-button {
  background-color: #d9d9d9;
  border: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px; /* Botão mais fino */
  border-radius: 50%;
  padding: 0; /* Remove padding adicional */
}

.espacing {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

#arquive-selected {
  font-size: 12px;
  color: #000000;
  font-family: 'Karla';
  font-weight: 300;
  margin-left: 10px; /* Espaçamento entre imagem e texto */
  text-align: left;
}

.arquivo {
  width: 50%;
  height: auto;
  background-color: #D9D9D9;
  border-radius: 20px;
  border: 1px solid rgba(217, 217, 217, 0.43);
  margin: 10% auto;
  display: flex; /* Alinha os itens horizontalmente */
  align-items: center;
  padding: 0.5rem 1rem; /* Reduz o espaçamento interno */
}

h4 {
  font-size: 12px;
  color: #555555;
  font-family: 'Karla';
  font-weight: 300;
  margin: 0.3rem 0;
}

h6 {
  font-family: 'Karla';
  font-size: 14px;
  color: #091D87;
  font-weight: 400;
  margin-left: 10px; /* Mantém alinhamento com o texto */
}

#imagelogo {
  width: 34px;
  height: 34px;
  margin-right: 10px; /* Espaçamento entre imagem e texto */
}

/* Responsividade - Ajustes para telas menores */
@media (max-width: 768px) {
  .arquivo {
    width: 80%;
    padding: 0.5rem; /* Ajusta espaçamento interno */
  }

  h4 {
    font-size: 11px; /* Texto menor */
  }

  h6 {
    font-size: 12px;
  }

  #arquive-selected {
    font-size: 11px;
  }

  #imagelogo {
    width: 28px;
    height: 28px; /* Imagem menor */
  }
}

@media (max-width: 480px) {
  .arquivo {
    width: 90%;
    padding: 0.5rem; /* Ajusta espaçamento interno */
    flex-direction: column; /* Empilha em telas muito pequenas */
    text-align: center;
  }

  #imagelogo {
    margin: 0 auto 10px; /* Centraliza e adiciona espaçamento abaixo */
  }

  h4, h6 {
    text-align: center;
  }

  #arquive-selected {
    margin: 5px 0;
    font-size: 10px; /* Texto menor */
  }

  .icon-button {
    width: 30px;
    height: 30px; /* Botão menor */
  }
}

</style>