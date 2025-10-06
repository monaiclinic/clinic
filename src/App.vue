<template>
    <HeaderComponent />
    <CarroselComponent />
    <main class="min-h-screen pt-20">
        <div class="container mx-auto p-4">
            <h1 class="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to the Vue.js App with Flowbite</h1>
            <p class="text-center text-gray-700">This is a simple application demonstrating the integration of Flowbite components in a Vue.js project.</p>
        </div>
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
