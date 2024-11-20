<script setup>
import RelatoriosAdmin from '@/components/RelatoriosAdmin.vue';
import MenuAdministradores from '@/components/MenuAdministradores.vue';
import pagHeader from '@/components/pagHeader.vue';
</script>

<template>
   <MenuAdministradores></MenuAdministradores>
   <pagHeader class="pagHeader"></pagHeader>
   <RelatoriosAdmin></RelatoriosAdmin>
</template>

<style scoped>
.pagHeader{
margin-top: -90%;
}
</style>