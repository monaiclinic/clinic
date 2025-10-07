<script setup lang="ts">
import HeroTextComponent from './HeroTextComponent.vue';

</script>

<template>
  <div class="md:sticky md:h-[calc(100vh-68px)] md:max-h-none">
    <video autoplay muted loop playsinline class="md:w-screen  object-cover">
      <source src="/video/banner.mp4" type="video/mp4" />
    </video>

    <div
      class="hidden md:block max-w-screen-xl px-4 md:absolute md:text-white  h-20 2xl:top-[200px] 2xl:left-[20.444rem] lg:top-[200px] lg:left-[3.12rem]">
      <div class="max-w-[800px]">
        <HeroTextComponent />
      </div>
    </div>
  </div>
  <div class="md:hidden px-4">
    <HeroTextComponent />
  </div>
</template>