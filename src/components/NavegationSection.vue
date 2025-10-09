<template>
    <div class="navigation-wrapper">
      <div class="nav-container">
        <LogoIcon />
        <button
          class="menu-toggle"
          @click="menuAberto = !menuAberto"
          aria-label="Abrir menu"
        >
          <svg v-if="!menuAberto" width="28" height="28" viewBox="0 0 28 28"><rect x="4" y="8" width="20" height="2.5" rx="1" fill="#333"/><rect x="4" y="17" width="20" height="2.5" rx="1" fill="#333"/></svg>
          <svg v-else width="28" height="28" viewBox="0 0 28 28"><rect x="7" y="8.25" width="19" height="2.5" rx="1" transform="rotate(45 7 8.25)" fill="#333"/><rect x="6" y="20" width="19" height="2.5" rx="1" transform="rotate(-45 6 20)" fill="#333"/></svg>
        </button>
        <nav class="nav-menu desktop">
          <ul>
            <li>
              <a href="#inicio">
                <span class="icon">
                  <!-- Casa (Início) -->
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12L12 5L21 12" stroke="currentColor" stroke-width="2"/><rect x="7" y="13" width="10" height="7" stroke="currentColor" stroke-width="2"/></svg>
                </span>
                Início
              </a>
            </li>
            <li>
              <a href="#tratamentos">
                <span class="icon">
                  <!-- Pipeta / Frasco (Tratamentos) -->
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 3l5 5-14 14a2 2 0 1 1-3-3L16 3z" stroke="currentColor" stroke-width="2"/><path d="M21 8l-3-3" stroke="currentColor" stroke-width="2"/></svg>
                </span>
                Tratamentos
              </a>
            </li>
            <li>
              <a href="#equipe">
                <span class="icon">
                  <!-- Grupo (Equipe) -->
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="8" r="3" stroke="currentColor" stroke-width="2"/><path d="M4 20c0-2.22 2.686-4 6-4s6 1.78 6 4" stroke="currentColor" stroke-width="2"/><path d="M14 18v2h6v-2c0-2.21-2.686-4-6-4" stroke="currentColor" stroke-width="2"/></svg>
                </span>
                Equipe
              </a>
            </li>
            <li>
              <a href="#resultados">
                <span class="icon">
                  <!-- Troféu (Resultados) -->
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="6" stroke="currentColor" stroke-width="2"/><path d="M17 5h3v2a7 7 0 1 1-14 0V5h3" stroke="currentColor" stroke-width="2"/><path d="M8 21h8" stroke="currentColor" stroke-width="2"/><path d="M12 17v4" stroke="currentColor" stroke-width="2"/></svg>
                </span>
                Resultados
              </a>
            </li>
            <li>
              <a href="#depoimentos">
                <span class="icon">
                  <!-- Balão de fala (Depoimentos) -->
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.38 8.38 0 0 1 12 21.5a8.5 8.5 0 1 1 9-9h-2.5z" stroke="currentColor" stroke-width="2"/></svg>
                </span>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato">
                <span class="icon">
                  <!-- Envelope (Contato) -->
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2"/></svg>
                </span>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <transition name="fade">
          <nav v-if="menuAberto" class="nav-menu mobile">
            <ul>
              <li>
                <a href="#inicio" @click="fecharMenu">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12L12 5L21 12" stroke="currentColor" stroke-width="2"/><rect x="7" y="13" width="10" height="7" stroke="currentColor" stroke-width="2"/></svg>
                  </span>
                  Início
                </a>
              </li>
              <li>
                <a href="#tratamentos" @click="fecharMenu">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 3l5 5-14 14a2 2 0 1 1-3-3L16 3z" stroke="currentColor" stroke-width="2"/><path d="M21 8l-3-3" stroke="currentColor" stroke-width="2"/></svg>
                  </span>
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#equipe" @click="fecharMenu">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="8" r="3" stroke="currentColor" stroke-width="2"/><path d="M4 20c0-2.22 2.686-4 6-4s6 1.78 6 4" stroke="currentColor" stroke-width="2"/><path d="M14 18v2h6v-2c0-2.21-2.686-4-6-4" stroke="currentColor" stroke-width="2"/></svg>
                  </span>
                  Equipe
                </a>
              </li>
              <li>
                <a href="#resultados" @click="fecharMenu">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="6" stroke="currentColor" stroke-width="2"/><path d="M17 5h3v2a7 7 0 1 1-14 0V5h3" stroke="currentColor" stroke-width="2"/><path d="M8 21h8" stroke="currentColor" stroke-width="2"/><path d="M12 17v4" stroke="currentColor" stroke-width="2"/></svg>
                  </span>
                  Resultados
                </a>
              </li>
              <li>
                <a href="#depoimentos" @click="fecharMenu">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.38 8.38 0 0 1 12 21.5a8.5 8.5 0 1 1 9-9h-2.5z" stroke="currentColor" stroke-width="2"/></svg>
                  </span>
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" @click="fecharMenu">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2"/></svg>
                  </span>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import LogoIcon from './icons/LogoIcon.vue'
  
  const menuAberto = ref(false)
  const fecharMenu = () => {
    menuAberto.value = false
  }
  </script>
  
  <style scoped>
  .icon {
    margin-right: 0.6em;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
  }
  .navigation-wrapper {
    height: 5.625rem;
    background-color: #F1F0EC;
  }
  .navigation-wrapper > .nav-container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
  }
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    outline: none;
    margin-left: auto;
    cursor: pointer;
    z-index: 50;
  }
  .nav-menu.desktop ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }
  .nav-menu.desktop {
    margin-left: auto;
  }
  .nav-menu.mobile {
    display: none;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  @media (max-width: 900px) {
    .nav-menu.desktop {
      display: none;
    }
    .menu-toggle {
      display: block;
    }
    .nav-menu.mobile {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 5.625rem;
      right: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      z-index: 20;
      padding: 2rem 1.5rem;
    }
    .nav-menu.mobile ul {
      width: 100%;
      flex-direction: column;
      gap: 2rem;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .nav-menu.mobile li {
      width: 100%;
    }
    .nav-menu.mobile a {
      width: 100%;
      display: flex;
      align-items: center;
      color: #333;
      font-size: 1.3rem;
    }
  }
  .nav-menu a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.2s;
    display: flex;
    align-items: center;
  }
  .nav-menu a:hover {
    color: #333;
  }
  </style>
  