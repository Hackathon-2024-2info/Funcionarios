<script setup>

</script>

<template>
  <div class="lg"><main id="main">

<div class="box">
  <h1 class="relatorio">RELATÓRIO DE CONCLUSÃO DE SERVIÇO</h1>
  <label for=""> Dificuldade do serviço</label>
  <select id="opcoes" name="opcoes" required>
    <option value="" disabled selected>Selecione</option>
  </select>
</div>

<div class="espacamento"></div>

<div class="box">
  <label for="opções"> Tempo de realização do serviço</label>
  <input class="input1" placeholder="Insira o tempo em que foi realizado o serviço">
</div>

<div class="espacamento"></div>


<div class="box">

  <label for=""> Colaboração da empresa que recebeu o serviço</label>
  <select id="opcoes" name="opcoes" required>
    <option value="cor" disabled selected>Selecione</option>
  </select>
</div>

<div class="espacamento"></div>

<div class="box">

  <label for=""> Possíveis pendências que ficaram na máquina </label>
  <input class="input2" placeholder="Insira possíveis pendências">
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
</div></div>




  <div class="sm">
    <main id="main">

<div class="box">
  <h1 class="relatorio">RELÁTORIO DE CONCLUSÃO DE SERVIÇO</h1>
  <label for=""> Dificuldade do serviço</label>
  <select id="opcoes" name="opcoes" required>
    <option value="" disabled selected>Selecione</option>
  </select>
</div>

<div class="espacamento"></div>

<div class="box">
  <label for="opções"> Tempo de realização do serviço</label>
  <input class="input1" placeholder="Insira o tempo em que foi realizado o serviço">
</div>

<div class="espacamento"></div>


<div class="box">

  <label for=""> Colaboração da empresa que recebeu o serviço</label>
  <select id="opcoes" name="opcoes" required>
    <option value="cor" disabled selected>Selecione</option>
  </select>
</div>

<div class="espacamento"></div>

<div class="box">

  <label for=""> Possíveis pendências que ficaram na máquina </label>
  <input class="input2" placeholder="Insira possíveis pendências">
</div>

<div class="container">
<label for="">Descrição da máquina e da realização do serviço</label>
</div>
<input class="input3" placeholder="Insira a descrição">
<div class="espacing" @click="openFileSelectionantes">
  <fieldset class="arquivo">
    <div class="archive-input">
      <input type="file" @change="handleFileChangeantes" accept=".jpeg, .png" ref="fileInputantes"
        style="display: none" />
      <button @click="triggerFileInputantes" class="icon-button">
        <i class="fas fa-file-archive"> <img src="@/assets/file-attach-01.png" alt="" id="imagelogo"></i>
        <!-- Example icon -->
      </button>
      <div id="arquive-selected" v-if="fileNameantes">Arquivo Selecionado: {{ fileNameantes }}</div>
    </div>
    <h6>INSIRA AQUI</h6>
    <h4>Imagens da máquina ANTES do serviço </h4>
  </fieldset>
</div>




</main>


<div class="espacing" @click="openFileSelectiondepois">
<fieldset class="arquivo">
  <div class="archive-input">
    <input type="file" @change="handleFileChangedepois" accept=".jpeg, .png" ref="fileInputdepois"
      style="display: none" />
    <button @click="triggerFileInputdepois" class="icon-button">
      <i class="fas fa-file-archive"> <img src="@/assets/file-attach-01.png" alt="" id="imagelogo"></i>
      <!-- Example icon -->
    </button>
    <div id="arquive-selected" v-if="fileNamedepois">Arquivo Selecionado: {{ fileNamedepois }}</div>
  </div>
  <h6>INSIRA AQUI</h6>
  <h4>Imagens da máquina DEPOIS do serviço</h4>
</fieldset>
</div> 


<div>
<button id="enviar" type="submit">Enviar</button>
</div> 
</div>
</template>

<script setup>
  import { ref } from 'vue'

  const fileNameantes = ref('')
  const fileInputantes = ref(null)

  function openFileSelectionantes() {
    fileInputantes.value.click()
  }

  function handleFileChangeantes(event) {
      const file = event.target.files[0];
      if (file) {
        fileNameantes.value = file.name;
      }
    }
  function triggerFileInputantes() {
      fileInputantes.value.click(); 
    }


    const fileNamedepois = ref('')
  const fileInputdepois = ref(null)

  function openFileSelectiondepois() {
    fileInputdepois.value.click()
  }

  function handleFileChangedepois(event) {
      const file = event.target.files[0];
      if (file) {
        fileNamedepois.value = file.name;
      }
    }
  function triggerFileInputdepois() {
      fileInputdepois.value.click(); 
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@media only screen and (min-device-width: 601px) {
  .sm{
    display: none;
  }
#main {
  width: 564px;
  height: 734px;
  margin-left: 28%;
  margin-top: 8%;
}

.container {
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 1030px;
  top: 31%;

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
  padding: 10px 16px;
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
  padding: 10px 16px;
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
  height: 403px;
  top: 177px;
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


#enviar {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  padding: 15px 40px;
  width: 148px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin-top: 3rem;
  border: none;
  text-align: center;
  margin-left: 51%;
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

@media only screen and (max-device-width: 600px) {
  h6 {
  font-family: 'Karla';
  font-size: 15px;
  color: #091D87;
  font-weight: 400;
  padding-left: 20%;
}

.lg{
  display: none;
}

.container {
margin-left: 10%;
width: 50%;
}



.espacing {
  height: 2vh;

}

.relatorio {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 120%;
  color: #180577;
  width: 273px;
  margin-top: 10%;
  margin-bottom: 20px;
}

.espacamento {
  margin-top: 2.8%;
}


#opcoes {
  width: 100%;
  height: 53px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-size: 12px;
  color: #666666;
  padding-left: 3.5%;
}



.input1 {
  padding: 10px 16px;
  gap: 10px;
  width: 90%;
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
  color:#666666;

}




.input2 {
  padding: 10px 16px;
  width: 90%;
  height: 34px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  border: none;
  outline: none;

}


.input3 {
  padding: 10px 16px;
  gap: 10px;
  width: 70%;
  height: 110px;
  background: rgba(217, 217, 217, 0.43);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color:#666666;
  display: block;
  margin: 0 auto;
  margin-bottom: -10%;
}



label {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #666666;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding: 0px;
  width: 296px;
  padding-bottom: 10px;
}


#enviar {
  background-color: #091D87;
  border-radius: 5px;
  font-family: 'Karla';
  padding: 15px 40px;
  width: 36%;
  font-weight: 700;
  font-size: 85%;
  color: white;
  margin-top: 3rem;
  border: none;
  text-align: center;
  display: block;
    margin: 0 auto;
  align-items: center;
  margin-top: 23%;
  margin-bottom: 10%;
}


#arquive-selected {
  font-size: 12px;
  color: #000000;
  font-family: 'Karla';
  font-weight: 300;
  margin-top: 4%;
}

.arquivo {

  width: 70%;
  height: 60px;
  border-radius: 20px;
  border-color: rgba(217, 217, 217, 0.43);
  display: grid;
  grid-template-rows: 20% 40% 20%;
  margin: auto;
  margin-top: 20%;
  background-color: rgba(217, 217, 217, 0.2);
}

h4 {
  font-size: 11px;
  color: #555555;
  font-family: 'Karla';
  font-weight: 300;
  padding-left: 20%;
  margin-top: -3%;
  width: 70%;
  margin-left: 5%;
}

h6 {
  font-family: 'Karla';
  margin-top: -5px;
  font-size: 15px;
  color: #091D87;
  font-weight: 400;
  padding-left: 20%;
  margin-left: 5%;
}



#file-input {
  background-image: ("@/assets/iconimage.png");


}


.icon-button{
  border: 0px;
  background: none;
  margin-top: 3%;
  margin-left: 3%;
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
  
    width: 30px;
    height: 30px;
margin-left: 30%;
margin-top: 30%;
}
.box{
  margin-left: 10%;
  margin-right: 10%;

}
}
</style>