<template>
    <HeaderComponent />
    <CarroselComponent />
    <main class="min-h-screen text-center mt-6 text-black md:mt-54">
       Em construção
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderComponent from './components/HeaderComponent.vue'
import CarroselComponent from './components/CarroselComponent.vue'


onMounted(() => {
    initFlowbite()
})
</script>
