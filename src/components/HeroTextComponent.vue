<script setup>
import FaleConoscoIcon from './icons/FaleConoscoIcon.vue';

</script>

<template>
    <div id="hero-text" class="text-2xl mt-2 font-bold md:text-4xl text-justify  md:text-start">
        Sua pele merece o melhor: resultados visíveis, autoestima renovada.
    </div>
    <div id="description" class="text-lg text-justify mt-4  md:text-start">
        Sua pele reflete sua história e merece atenção especial a cada detalhe.
        Na nossa clínica, oferecemos tratamentos que vão além da estética: promovem bem-estar, confiança e
        saúde verdadeira. Descubra resultados reais e sinta a transformação em cada fase do seu cuidado conosco.
    </div>
    <button type="button"
        class="flex items-center justify-center md:justify-start w-full md:w-50! gap-2 mt-4 text-white bg-[#ADA495]/50  font-medium rounded-lg text-lg px-4 py-2 text-center cursor-pointer">
        <div class="bg-[#ADA495]/90 rounded p-0.5">
            <FaleConoscoIcon />
        </div>
        <div class="md:text-white/60 text-black/80">fale conosco</div>
    </button>

</template>

<style lang="scss" scoped>
$screen-xs: 320px; // Smartphones compactos
$screen-sm: 390px; // Smartphones modernos
$screen-md: 768px; // Tablets
$screen-lg: 1024px; // Notebooks e tablets horizontais
$screen-xl: 1366px; // Desktops padrão
$screen-2xl: 1536px; // Monitores grandes
$screen-3xl: 1920px; // Full HD
$screen-4xl: 2560px; // 2K / QHD
$screen-5xl: 3840px; // 4K UHD


@media (min-width: $screen-xs) and (max-width: calc($screen-md - 1px)) {
    #hero-text {
        font-size: 1.5rem;
        line-height: 1.4;
        text-align: start;
    }

    #description{
        font-size: 1rem;
        line-height: 1.6;
        text-align: start;
    }
}
</style>