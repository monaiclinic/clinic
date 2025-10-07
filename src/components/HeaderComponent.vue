<template>
  <nav class="bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200 navbar-custom" id="navbar">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-0">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <LogoIcon />
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button"
          class="hidden sm:flex items-center gap-2 text-white bg-[#ADA495]/50  font-medium rounded-lg text-lg px-4 py-2 text-center cursor-pointer">
          <div class="bg-[#ADA495]/90 rounded p-0.5">
            <FaleConoscoIcon />
          </div>
          <div class="text-[#0F0E0D]/60">fale conosco</div>
        </button>

        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li>
            <a href="#"
              class="block uppercase text-lg font-semibold py-2 px-3 rounded-sm text-black/70 hover:text-black/40 md:p-0"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="#"
              class="block uppercase text-lg font-semibold py-2 px-3 rounded-sm text-black/70 hover:text-black/40 md:p-0">Sobre</a>
          </li>
          <li>
            <a href="#"
              class="block uppercase text-lg font-semibold py-2 px-3 rounded-sm text-black/70 hover:text-black/40 md:p-0">Serviços</a>
          </li>
          <li>
            <a href="#"
              class="block uppercase text-lg font-semibold py-2 px-3 rounded-sm text-black/70 hover:text-black/40 md:p-0">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup>
import FaleConoscoIcon from './icons/FaleConoscoIcon.vue';
import LogoIcon from './icons/LogoIcon.vue';


</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #4f46e5;
}

.navbar-custom {
  z-index: 1000;
}

</style>
