<template>
    <nav class="navbar">
        <div class="logo">Meu Site</div>

        <button class="hamburger" :class="{ active: menuAberto }" @click="menuAberto = !menuAberto" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <transition name="slide">
        <div v-if="menuAberto" class="menu-mobile">
            <ul>
                <li><a href="#home" @click="menuAberto = false">Home</a></li>
                <li><a href="#sobre" @click="menuAberto = false">Sobre</a></li>
                <li><a href="#servicos" @click="menuAberto = false">Serviços</a></li>
                <li><a href="#contato" @click="menuAberto = false">Contato</a></li>
            </ul>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue'

const menuAberto = ref(false)
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

/* Botão Hambúrguer */
.hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;
}

.hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background: white;
    transition: all 0.3s ease;
    border-radius: 3px;
}

/* Animação do X */
.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(9px, 9px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(9px, -9px);
}

/* Menu Mobile */
.menu-mobile {
    position: fixed;
    top: 70px;
    left: 0;
    width: 280px;
    height: calc(100vh - 70px);
    background: white;
    padding: 2rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 99;
}

.menu-mobile ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-mobile li {
    margin-bottom: 1.5rem;
}

.menu-mobile a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    padding: 0.5rem;
    border-radius: 5px;
    transition: background 0.2s;
}

.menu-mobile a:hover {
    background: #f0f0f0;
}

/* Animações */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}

@media (min-width: 768px) {
    .hamburger {
        display: none;
    }
}
</style>
