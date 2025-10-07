<template>
    <HeaderComponent />
    <CarroselComponent />
    <MapaComponent />
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderComponent from './components/HeaderComponent.vue'
import CarroselComponent from './components/CarroselComponent.vue'
import MapaComponent from "./components/MapaComponent.vue"


onMounted(() => {
    initFlowbite()
})
</script>
