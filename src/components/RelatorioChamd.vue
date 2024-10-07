<script setup>

</script>

<template>
  <main id="main">

    <div>
      <h1 class="relatorio">RELÁTORIO DE CONCLUSÃO DE SERVIÇO</h1>
      <label for=""> Dificuldade do serviço</label>
      <select id="opcoes" name="opcoes" required>
        <option value="" disabled selected>Selecione</option>
      </select>
    </div>

    <div class="espacamento"></div>

    <div>
      <label for="opções"> Tempo de realização do serviço</label>
      <input class="input1" placeholder="Insira o tempo em que foi realizado o serviço">
    </div>

    <div class="espacamento"></div>

    <div>
      <label for=""> Colaboração da empresa que recebeu o serviço</label>
      <select id="opcoes" name="opcoes" required>
        <option value="" disabled selected>Selecione</option>
      </select>
    </div>

    <div class="espacamento"></div>

    <div>
      <label for=""> Possíveis pendências que ficaram na máquina </label>
      <input class="input2" placeholder="Insira possíveis pendências">
    </div>










    <div>
      <button id="enviar" type="submit">Enviar</button>
    </div>


    <div class="espacing" @click="openFileSelection">
      <fieldset class="arquivo">
        <div class="archive-input">
          <input type="file" @change="handleFileChange" accept=".zip,.tar,.tar.gz, .pdf, .txt" ref="fileInput"
            style="display: none" />
          <button @click="triggerFileInput" class="icon-button">
            <i class="fas fa-file-archive"> <img src="@/assets/image-add.png" alt="" id="imagelogo"></i>
            <!-- Example icon -->
          </button>
          <div id="arquive-selected" v-if="fileName">Arquivo Selecionado: {{ fileName }}</div>
        </div>
        <h6>INSIRA AQUI</h6>
        <h4>Imagens da máquina ANTES do serviço </h4>
      </fieldset>
    </div>

    <div class="espacing" @click="openFileSelection">
      <fieldset class="arquivo">
        <div class="archive-input">
          <input type="file" @change="handleFileChange" accept=".zip,.tar,.tar.gz, .pdf, .txt" ref="fileInput"
            style="display: none" />
          <button @click="triggerFileInput" class="icon-button">
            <i class="fas fa-file-archive"> <img src="@/assets/image-add.png" alt="" id="imagelogo"></i>
            <!-- Example icon -->
          </button>
          <div id="arquive-selected" v-if="fileName">Arquivo Selecionado: {{ fileName }}</div>
        </div>
        <h6>INSIRA AQUI</h6>
        <h4>Imagens da máquina DEPOIS do serviço</h4>
      </fieldset>
    </div>
  </main>

  <main id="mainn">
    <div>
      <label for="">Descrição da máquina e da realização do serviço</label>
      <input class="input3" placeholder="Insira a descrição">
    </div>
  </main>
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
      fileInput.value.click(); 
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

#main {
  width: 564px;
  height: 734px;
  margin-left: 28%;
  margin-top: 8%;
}

#mainn {
  width: 564px;
  height: 734px;
  margin-left: 62%;
  margin-top: -33.2%;
}



.espacing {
  height: 2vh;
}

.relatorio {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 18px;
  color: #180577;
  padding: 53px;
  margin-left: -9%;
  width: 564px;
  height: 24px;
  top: 177px;
}

.espacamento {
  margin-top: 6.6%;
}


#opcoes {
  display: flex;

  align-items: flex-start;
  padding: 10px 16px;
  width: 465px;
  height: 44px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  border: none;
  outline: none;



}

option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  background: rgba(217, 217, 217, 0.43);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 465px;
  height: 403px;
  left: 896px;
  top: 236px;



}


.input1 {
  padding: 10px 16px;
  gap: 10px;
  width: 465px;
  height: 39px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
}




.input2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  width: 465px;
  height: 46px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
  border: none;
  outline: none;

}


.input3 {


  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;

  width: 465px;
  height: 380px;

  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #687C94;
  color: #000000;
  border: none;
  outline: none;





}



label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #666666;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding: 15px;
  margin-left: -2.1%;
}


button {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  display: inline;
  display: grid;
  place-items: center;
  align-items: center;
  text-align: center;
  padding: 15px 40px;
  width: 148px;
  font-size: 16px;
  color: white;
  margin-top: 3rem;
  border: none;
  text-align: center;
  margin-left: 29%
}














#arquive-selected {
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



#file-input {
  background-image: ("@/assets/iconimage.png");
  width: 34px;
  height: 34px;
  padding: 3%;
}
</style>