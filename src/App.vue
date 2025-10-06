<template>
    <HeaderComponent />
    
    <main>
        
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderComponent from './components/HeaderComponent.vue'


onMounted(() => {
    initFlowbite()
})
</script>
