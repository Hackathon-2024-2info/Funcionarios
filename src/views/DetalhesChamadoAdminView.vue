<script setup>
import DetalheChamado from '@/components/DetalheChamado.vue';
import MenuAdministradores from '@/components/MenuAdministradores.vue';
import pagHeader from '@/components/pagHeader.vue';
defineProps(['id'])
</script>

<template>
            <pagHeader></pagHeader>
            <MenuAdministradores></MenuAdministradores>
    <DetalheChamado :id="id"></DetalheChamado>
</template>