<script setup>

</script>

<template>
  <main id="main">

    <div id="block">
      <h1 class="relatorio">RELATÓRIO DE CONCLUSÃO DE SERVIÇO</h1>
      <label for=""> Dificuldade do serviço</label>
      <select id="opcoes" name="opcoes" required>
        <option value="" disabled selected>Selecione</option>
      </select>
    </div>

    <div class="espacamento"></div>

    <div id="block">
      <label for=""> Tempo de realização do serviço</label>
      <input type="number" class="input1" placeholder="Insira o tempo em que foi realizado o serviço">
    </div>

    <div class="espacamento"></div>

    <div id="block">
      <label for=""> Colaboração da empresa que recebeu o serviço</label>
      <select id="opcoes" name="opcoes" required>
        <option value="cor" disabled selected>Selecione</option>
      </select>
    </div>

    <div class="espacamento"></div>

    <div id="block">
      <label for=""> Possíveis pendências que ficaram na máquina </label>
      <input type="text" class="input2" placeholder="Insira possíveis pendências">
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




  </main>

  <div class="container">
    <label for="">Descrição da máquina e da realização do serviço</label>
    <input class="input3" placeholder="Insira a descrição">
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
   </div>

  <div>
    <button id="enviar" type="submit">Enviar</button>
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
      fileInput.value.click(); 
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

#main {
  width: 39%;
  margin-left: 28%;
  margin-top: 8%;
}

.container {
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 65%;
  top: 38.5%;
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
  padding: 10%;
  margin-left: -9%;
  width: 99%;
  top: 59%;
}
.espacamento {
  margin-top: 2.8%;
}


#opcoes {
  width: 465px;
  height: 53px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-size: 14px;
  color: #687C94;
}



.input1 {
  padding: 2% 3%;
  gap: 10px;
  width: 430px;
  height: 34px;
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
  padding: 2% 3%;
  width: 430px;
  height: 34px;
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


.input3 {
  width: 465px;
  height: 430px;
  top: 59%;
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
  padding: 3%;
  margin-left: -2.1%;
}


#enviar {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  padding: 1% 1%;
  width: 148px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin-top: 3rem;
  border: none;
  text-align: center;
  margin-left: 57%;
  margin-top: 7%;
}


#arquive-selected {
  font-size: 12px;
  color: #000000;
  font-family: 'Karla';
  font-weight: 300;
  margin-top: 4%;
}

.arquivo {
  width: 63%;
  height: 6vh;
  margin-left: -1%;
  border-radius: 15px;
  border-color: rgba(217, 217, 217, 0.43);
  margin-top: 10%;
  display: grid;
  margin-left: 6%;
  grid-template-rows: 20% 40% 20%;
  background-color: rgba(217, 217, 217, 0.43);;
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

}


.icon-button{
  border: 0px;
  margin-top: 2%;
  margin-left: 5%;
}

.espacing{
  height: 2vh;
}


#arquive-selected{
    font-size: 12px;
    color: #000000;
    font-family: 'Karla';
    font-weight: 300;
    margin-top: 4%;
    margin-left: 2%;
}



#imagelogo {
    width: 24px;
    height: 24px;
    padding: 3%;
    left: 12%;

}

@media (max-width: 480px) {
  
#main {
  display: grid;
  align-items: center;
}

.container {
 position: relative;
 left: 0px;
}


.relatorio {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: #180577;
  margin-left: -11%;
  width: 273px;
}

#opcoes {
  width: 297px;
  height: 44px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-size: 12px;
  color: #687C94;
  padding-left: 3%;
}



.input1 {
  padding: 10px 16px;
  gap: 10px;
  width: 263px;
  height: 34px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #687C94;
  display: grid;
  align-self: center;
}




.input2 {
  padding: 10px 16px;
  width: 263px;
  height: 34px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #687C94;
  border: none;
  outline: none;
  display: grid;
  align-self: center;

}


.input3 {
  width: 263px;
  height: 100px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #687C94;
  border: none;
  outline: none;
  display: grid;
  align-self: center;
}



label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  margin-left: 2%;
  color: #666666;
  display: grid;
  align-self: center;
}


#enviar {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  padding: 15px 40px;
  width: 148px;
  height: 35px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin-top: 3rem;
  border: none;
  text-align: center;
}


#arquive-selected {
  font-size: 12px;
  color: #000000;
  font-family: 'Karla';
  font-weight: 300;
  margin-top: 4%;
}

.arquivo {
  width: 63%;
  height: 6vh;
  margin-left: -1%;
  border-radius: 20px;
  border-color: rgba(217, 217, 217, 0.43);
  margin-top: 10%;
  display: grid;
  margin-left: 6%;
  grid-template-rows: 20% 40% 20%;
  background-color: rgba(217, 217, 217, 0.43);;
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

}


.icon-button{
  border: 0px;
  margin-top: 2%;
}

.espacing{
  height: 2vh;
}


#arquive-selected{
    font-size: 12px;
    color: #000000;
    font-family: 'Karla';
    font-weight: 300;
    margin-top: 4%;
    margin-left: 2px;
}



#imagelogo {
    width: 24px;
    height: 24px;
    padding: 3%;
    left: 12%;

}
}










</style>