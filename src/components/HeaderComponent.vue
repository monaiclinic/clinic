<template>
  <nav class="bg-white fixed w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-0">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/img/MONAI CLINIC_MARCA_PNG_21.png" class="h-20 md:h-24" alt="Flowbite Logo">
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button"
          class="flex items-center gap-2 text-white bg-[#ADA495]/50  font-medium rounded-lg text-lg px-4 py-2 text-center cursor-pointer">
          <div class="bg-[#ADA495]/90 rounded p-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg>
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

</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #4f46e5;
}
</style>
