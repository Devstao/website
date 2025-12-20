<script setup lang="ts">
import useDaHilux from '@/stores/useDaHilux'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

// Referência para o elemento de vídeo

const { videoRef } = storeToRefs(useDaHilux())
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <h1 class="navbar-brand" style="">DEVstão</h1>

      <ul class="nav-links" style="list-style: none; margin: 0; padding: 0">
        <li class="nav-items">
          <RouterLink
            @click="videoRef?.play()"
            :to="{ name: 'index' }"
            class="nav-links"
            active-class="current-item"
          >
            Início
          </RouterLink>
        </li>
        <li class="nav-items">
          <RouterLink
            @click="videoRef?.play()"
            :to="{ name: 'sobre' }"
            class="nav-links"
            active-class="current-item"
          >
            Sobre
          </RouterLink>
        </li>
        <li class="nav-items">
          <RouterLink
            @click="videoRef?.play()"
            :to="{ name: 'projetos' }"
            class="nav-links"
            active-class="current-item"
          >
            Projetos
          </RouterLink>
        </li>
        <li class="nav-items-bavarian-grove">
          <a class="btn-bavarian-grove" href="https://linktr.ee/BavarianGrove" target="_blank">
            Entre para a Comunidade
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="css">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: var(--ash-gray);
}

.header {
  font-size: 1.3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  background: linear-gradient(180deg, #29230ade 5%, #000000ee 100%);
}

.nav-links {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  height: 100%;
  text-decoration: none;
}

.nav-items a {
  color: var(--ash-gray);
  text-decoration: none;
  font-size: 1.2rem;

  font-weight: 800;

  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  transition:
    background 0.2s,
    text-decoration 0.2s;
}

.nav-items a:hover {
  background: rgba(255, 255, 255, 0.08);
  color: whitesmoke;
}

.current-item {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(223, 184, 77, 0.644);
}

.navbar-brand {
  color: var(--ash-gray);
  margin-left: 1rem;
  line-height: 60px;
  transition: all 0.6;
}

.navbar-brand:hover {
  animation: rainbow 1.5s linear infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 217, 0, 0.753),
    rgba(255, 195, 0, 0.753),
    rgba(255, 179, 0, 0.753),
    rgba(230, 190, 138, 0.753),
    rgba(191, 166, 64, 0.753)
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-items-bavarian-grove {
  color: whitesmoke;
  text-decoration: none;
  font-size: 1.2rem;

  font-weight: 800;

  padding: 0.5rem 0.8rem;
  border-radius: 2px;
  transition:
    background 0.2s,
    text-decoration 0.2s;
}

.nav-items-bavarian-grove a:hover {
  background: #a58109;
  color: rgba(245, 245, 245, 0.644);
}

.btn-bavarian-grove {
  background: #5c4705;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s;
  padding: 0.5rem 1rem;
}

@media (max-width: 768px) {
  .header {
    zoom: 0.4;
    padding: 0 6px;
  }
}
</style>
