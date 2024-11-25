<script setup>
import PagEstoque from '@/components/PagEstoque.vue';
import MenuFuncionarios from '@/components/MenuFuncionarios.vue';
import pagHeader from '@/components/pagHeader.vue';

</script>

<template> 
<pagHeader></pagHeader>
<MenuFuncionarios></MenuFuncionarios>
<PagEstoque></PagEstoque>


</template>

<style scoped>
*{
    background-color: #f5f5f5f5;
}

</style>
