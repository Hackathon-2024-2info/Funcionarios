<template>
  <div ref="map" style="width:500px; height: 500px;"></div>
 </template>
 <script setup>
  import { ref, onMounted } from 'vue';
  const map = ref(null);
 
 
  onMounted(()=> {
    new window.google.maps.Map(map.value, {
      center: {lat: 45.4215296, lng: -75.6971931 },
      zoom: 10
    });
 
 
  }
   )
 </script>