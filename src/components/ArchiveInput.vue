<template>
    <div>
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

<script>
export default {
  data() {
    return {
      fileName: ''
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); // Trigger the hidden file input
    }
  }
};
// enviar arquivo pro banco:
// methods: {
//   handleFileChange(event) {
//     const file = event.target.files[0];
//     if (file) {
//       this.fileName = file.name;
//       const formData = new FormData();
//       formData.append('file', file);

//       // Replace with your API endpoint
//       fetch('https://your-api-endpoint.com/upload', {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('File uploaded successfully', data);
//       })
//       .catch(error => {
//         console.error('Error uploading file', error);
//       });
//     }
//   }
// }
</script>

<style scoped>

.icon-button{
    background-color: #D9D9D9;
    border: 0px;
    padding: 2%;
}


#arquive-selected{
    font-size: 12px;
    color: #000000;
    font-family: 'Karla';
    font-weight: 300;
    margin-top: 4%;
}

.arquivo {
    width: 50%;
    height: 6vh;
    background-color: #D9D9D9;
    border-radius: 20px;
    border-color: rgba(217, 217, 217, 0.43);
    margin-top: 10%;
    display: grid;
    place-self: center;
    margin-left: 20%;
    grid-template-rows: 20% 40% 20%;
}

h4 {
    font-size: 12px;
    color: #555555;
    font-family: 'Karla';
    font-weight: 300;
    padding-left: 20%;
}

h6 {
    font-family: 'Karla';
    font-size: 16px;
    color: #091D87;
    font-weight: 400;
    padding-left: 20%;
}

#imagelogo {
    width: 34px;
    height: 34px;
    padding: 3%;
}

#file-input {
    background-image: ("@/assets/iconimage.png");
    width: 34px;
    height: 34px;
    padding: 3%;
}
</style>