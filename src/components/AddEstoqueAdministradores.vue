<script setup>

</script>

<template>
    <main id="main">
        <div>
            <h1 class="add">ADICIONAR ITEM AO ESTOQUE</h1>
            <label for=""> Nome do item </label>
            <input type="text" class="input" placeholder="Insira o nome do item a ser adicionado">
        </div>

        <div class="espacamento"></div>

        <div>
            <label for=""> Marca do item </label>
            <input type="text" class="input" placeholder="Insira a marca do item">
        </div>

        <div class="espacamento"></div>
        <div>
            <label for="">Quantidade do item </label>
            <input type="text" class="input" placeholder="Insira a quantidade a ser adicionada ao estoque do item">
            <button id="Adicionar" type="submit" class="button">Adicionar</button>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');

#main {
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    max-width: 600px;
}

.add {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 1.2;
    color: #180577;
    text-align: center;
    margin-bottom: 1rem;
}

.espacamento {
    margin-top: 1.5rem;
}

.input {
    padding: 0.8rem;
    width: 100%;
    height: auto;
    background: rgba(217, 217, 217, 0.43);
    border-radius: 5px;
    border: 0px solid #ccc;
    outline: none;
    font-family: 'Karla';
    font-weight: 400;
    font-size: 1rem;
    color: #000000;
    box-sizing: border-box;
    cursor: pointer;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
    border: none; 
    box-shadow: 0 0 10px rgba(9, 29, 135, 0.5); 
    background: rgba(217, 217, 217, 0.6); 
}

label {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #666666;
    display: block;
    margin-bottom: 0.5rem;
}

.button {
    background-color: #091D87;
    border-radius: 5px;
    font-family: 'Karla';
    text-align: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: white;
    border: none;
    display: block;
    margin: 2rem auto 0 auto;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.3s ease;
}

.button:active {
    transform: scale(0.95); 
    background-color: #07166a; 
}

@media (max-width: 768px) {
    .add {
        font-size: 1.5rem;
    }

    .input {
        font-size: 0.9rem;
    }

    .button {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
    }
}

@media (max-width: 480px) {
    .add {
        font-size: 1.3rem;
    }

    .input {
        font-size: 0.8rem;
    }

    .button {
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
    }
}
</style>
