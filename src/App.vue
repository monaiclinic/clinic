<template>
    <!-- https://chatgpt.com/c/68e702a2-bb70-8331-82c6-82aea24aab0e -->
    <NavegationSection />
    <HeroSection />

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeroSection from './components/HeroSection.vue'
import NavegationSection from './components/NavegationSection.vue'

onMounted(() => {
    initFlowbite()
})

</script>
