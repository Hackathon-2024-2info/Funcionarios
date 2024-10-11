<script setup></script>

<template>
    <main>
        <div class="botaozinho">
            <img src="@/assets/🦆 icon _Chevron left alt (line)_.png" alt="">
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
            <p class="descricao">Descrição: bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccwijedoiewjdewoidhewudhewyifgewufeiocjjkgeweydw8oueroifhewyydg379uwrfh4ury3279ew09fuhwiudjewifuewygdqwudhewifu8yqwuhdewdjopwefiuoeruquiegqwjbdewiofjewoiwoieyuiqwhdjkdneijewihwyvdjhwbewdewijduwweidhnewoidewopdkewpduewouhdwoudhewiodjiwejdoiwjdwqdbwuihdwoidhoiqwhdwihdwiohdwodhoidqwhdiwhdoiwqdhiowhdoiqwhdqwoidhwoidhoidhqwihdwoiqhdoiqwhdoiwqh
            </p>

        </div>     
        </main>


<template>
    <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex align-items-center">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-content-between align-items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
                </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DetalheRelatorio } from '@/components/DetalheRelatorio';

onMounted(() => {
    DetalheRelatorio.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');


.espaco{
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

img {
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

.texts .descricao ,.pendente{
    line-height: 110%;
    word-wrap: break-word

}

p {
    font-family: 'Karla';
    line-height: 400%;
    color: #000000;
    font-weight: 400;
    font-size: 18px;
}



</style>