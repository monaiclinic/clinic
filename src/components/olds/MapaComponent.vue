<template>
    <div class="px-4 md:px-0">
        <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker :lat-lng="center" />
        </l-map>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

const zoom = ref(15)
const center = ref([-15.624162811651628, -47.65724136141584])  // São Paulo, Brasil
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
</script>