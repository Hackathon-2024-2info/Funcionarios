<script setup></script>

<template>
    <main>
        <div class="botaozinho">
            <img class="img" src="@/assets/🦆 icon _Chevron left alt (line)_.png" alt="">
        </div>
        <div class="texts">
            <h1> Título do Relatório</h1>
            <p>Remetente: Edson</p>
            <p class="chamado">Chamado aberto em: 13/09/2024</p>
            <p class="tempo">Tempo de realização do serviço: 12 horas</p>
            <p class="dificuldade">Dificuldade do serviço: Média</p>
            <p class="colaborar">Colaboração da empresa: Boa</p>
            <p class="pendente">Possíveis pendências que ficaram na máquina:
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div class="espaco"></div>
            <p class="descricao">Descrição:
                bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccwijedoiewjdewoidhewudhewyifgewufeiocjjkgeweydw8oueroifhewyydg379uwrfh4ury3279ew09fuhwiudjewifuewygdqwudhewifu8yqwuhdewdjopwefiuoeruquiegqwjbdewiofjewoiwoieyuiqwhdjkdneijewihwyvdjhwbewdewijduwweidhnewoidewopdkewpduewouhdwoudhewiodjiwejdoiwjdwqdbwuihdwoidhoiqwhdwihdwiohdwodhoidqwhdiwhdoiwqdhiowhdoiqwhdqwoidhwoidhoidhqwihdwoiqhdoiqwhdoiwqh
            </p>

        </div>

        <section class="container">
            <div class="container-carrosel">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
                <img class="carrou-sel-img" src="@/assets/image 14.png" alt="">
            </div>
        </section>

    </main>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');


.espaco {
    margin-top: 10%;
}

.botaozinho {
    position: absolute;
    top: 28%;
    left: 20%;
    width: 51px;
    height: 43px;
    background: rgba(84, 111, 255, 0.32);
    border-radius: 10px;
}


.container {
    position: absolute;
    width: 400px;
    right: 10px;
    top: 27%;
    padding: 10px;
    background-color: #ececec;
    border-radius: 20px;
}

.container-carrosel {
    margin-top: 20px;
    width: 320px;
    height: 680px;
    overflow-y: scroll;
    background: #ececec;
    display: flex;
    flex-direction: column;
    gap: 5%;
}

.container-carrosel::-webkit-scrollbar {
    width: 0.7vw;
}

.container-carrosel::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;

}

.container-carrosel::-webkit-scrollbar-thumb {
    background-color: #6e78ff;
    width: 3px;
    border-radius: 4px;

}


.container-carrosel::-webkit-scrollbar-thumb:hover {
    width: 10px;
    height: 15px;
    margin-left: 10px;
}


.img {
    position: relative;
    display: flex;
    margin-left: 33%;
    margin-top: 21%;
}

h1 {
    display: flex;
    position: absolute;
    top: 29%;
    left: 37%;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #000000;
}

.texts {
    width: 50%;
    height: 30%;
    margin-left: 20%;
    margin-top: 20%;
}

.texts .descricao,
.pendente {
    line-height: 110%;
    word-wrap: break-word
}

.descricao {
    margin-top: -4%;

}


p {
    font-family: 'Karla';
    line-height: 400%;
    color: #000000;
    font-weight: 400;
    font-size: 18px;
}
</style>