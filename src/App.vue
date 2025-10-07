<template>
    <HeaderComponent />
    <CarroselComponent />
    <div>dsadas</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderComponent from './components/HeaderComponent.vue'
import CarroselComponent from './components/CarroselComponent.vue'
import MapaComponent from "./components/MapaComponent.vue"
import ProvaSocialComponent from './components/ProvaSocialComponent.vue'
import MenuComponent from './components/MenuComponent.vue'


onMounted(() => {
    initFlowbite()
})
</script>
