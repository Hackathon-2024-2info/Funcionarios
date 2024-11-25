<script setup>
import boxinfo from "@/components/BoxInfo.vue";
// import MenuFuncionarios from "@/components/MenuFuncionarios.vue";
// import PagHeader from '../components/pagHeader.vue';

defineProps(['id'])

</script>

<template> 
<!-- <PagHeader></PagHeader>
<MenuFuncionarios></MenuFuncionarios> -->
<boxinfo :id="id"></boxinfo>

</template>