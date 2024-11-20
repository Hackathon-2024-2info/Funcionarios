<script setup>
import DetalheRelatorio from '@/components/DetalheRelatorio.vue';
import MenuAdministradores from '@/components/MenuAdministradores.vue';
import pagHeader from '@/components/pagHeader.vue';
defineProps(['id'])

</script>

<template>
            <pagHeader></pagHeader>
            <MenuAdministradores></MenuAdministradores>
     <DetalheRelatorio :id="id"></DetalheRelatorio>
</template>