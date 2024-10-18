<script setup>
import MenuAdministradores from '@/components/MenuAdministradores.vue';
import pagHeader from '@/components/pagHeader.vue';
import boxinfo from '@/components/boxinfo.vue';

defineProps(['id'])
</script>

<template>
<pagHeader></pagHeader>
<MenuAdministradores></MenuAdministradores>
<boxinfo :id="id"></boxinfo>
</template>

<style scoped></style>