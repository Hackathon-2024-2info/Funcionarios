<template>
    <div class="espacing" @click="openFileSelection">
        <fieldset class="arquivo">
            <div class="archive-input">
                <input type="file" @change="handleFileChange" accept=".zip,.tar,.tar.gz, .pdf, .txt" ref="fileInput"
                    style="display: none" />
                <button @click="triggerFileInput" class="icon-button">
                    <i class="fas fa-file-archive"> <img src="@/assets/Icon2.png" alt="" id="imagelogo"></i> <!-- Example icon -->
                </button>
                <div id="arquive-selected" v-if="fileName">Arquivo Selecionado: {{ fileName }}</div>
            </div>
            <h6>ABRIR CURRÍCULO</h6>
      
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

.icon-button{
  background-color: #d9d9d9;
  border: 0px;
 
}




#arquive-selected{
    font-size: 12px;
    color: #000000;
    font-family: 'Karla';
    font-weight: 300;

}

.arquivo {
    width: 40%;
    height: 4vh;
    background-color: #D9D9D9;
    border-radius: 20px;
    border-color: rgba(217, 217, 217, 0.43);


   
    grid-template-rows: 20% 40% 20%;
}


h6 {
    font-family: 'Karla';
    font-size: 16px;
    color: #091D87;
    font-weight: 400;


}


#file-input {
    background-image: ("@/assets/Icon2.png");
    margin-top: 5%;
}
</style>