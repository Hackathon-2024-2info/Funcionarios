<script setup>
</script>


<template>

    <main>
        <div class="espaçamento">
            <div class="box">
                <img src="../assets/Video Task.png" alt="mapaDps">
                <p class="titulo">MANUTENÇÃO PREVENTIVA</p>
                <div class="minicontainer">
                    <p>Cliente: Krona</p>
                </div>
                <div class="infos">
                    <p>Prestadores: Edson e Fulano</p>
                    <p>Previsão de duração: 2 dias</p>
                    <p>Contato do responsável pela máquina: (47) 99012-9302</p>
                    <p>Descrição: Manutenção de máquina injetora tipo xxxxxxxxxx lalalalaal cucucucu suqwbuqhuie3uiwri32
                        relatados
                        ruídos na máquina</p>
                </div>
            </div>
        </div>
        <div>

        </div>
    </main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');

main{
    background-color: #F5F5F5;
    margin: 0;
}

.espaçamento {
    display: grid;
    place-items: start;
    margin-left: 15%;
}

.box {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    height: 100%;
    left: 332px;
    top: 178px;
    background: #ffffff;
    border-radius: 10px;

}

.box img {
    width: 100%;
    height: auto;
}

.titulo {
    object-fit: contain;
    white-space: nowrap;
    margin-top: 2%;
    font-family: 'Kantumruy Pro';
    font-weight: 700;
    margin-left: 5%;
    font-size: 32px;
    display: flex;
    color: #091D87;
}

.minicontainer {
    margin-top: 2%;
    width: 50%;
    margin-left: 5%;
    height: 3.5%;
    background: rgba(56, 77, 187, 0.4);
    border-radius: 20px;
}

.minicontainer p {
    object-fit: contain;
    text-align: center;
    font-family: 'Readex Pro';
}

.infos {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 200%;
    margin-left: 2%;
    margin-bottom: 5%;
}

.info p {
    margin-left: 3%;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
}
</style>