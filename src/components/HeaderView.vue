<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value
}

function closeMenu(): void {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <h1 class="navbar-brand" style="">DEVstão</h1>

      <button
        class="hamburger"
        :class="{ 'is-open': menuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
        :aria-expanded="menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        class="nav-links"
        :class="{ 'nav-open': menuOpen }"
        style="list-style: none; margin: 0; padding: 0"
      >
        <li class="nav-items">
          <RouterLink
            :to="{ name: 'index' }"
            class="nav-links"
            active-class="current-item"
            @click="closeMenu"
          >
            Início
          </RouterLink>
        </li>
        <li class="nav-items">
          <RouterLink
            :to="{ name: 'sobre' }"
            class="nav-links"
            active-class="current-item"
            @click="closeMenu"
          >
            Sobre
          </RouterLink>
        </li>
        <li class="nav-items">
          <RouterLink
            :to="{ name: 'projetos' }"
            class="nav-links"
            active-class="current-item"
            @click="closeMenu"
          >
            Projetos
          </RouterLink>
        </li>
        <li class="nav-items-bavarian-grove">
          <a
            class="btn-bavarian-grove"
            href="https://linktr.ee/BavarianGrove"
            target="_blank"
            @click="closeMenu"
          >
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

/* Hamburger button — hidden on desktop */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 1rem;
  z-index: 10;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--ash-gray);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.is-open span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}

.hamburger.is-open span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-open span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #29230ade 5%, #000000ee 100%);
    padding: 1rem 0;
    margin-right: 0 !important;
    height: auto;
    z-index: 100;
  }

  .nav-links.nav-open {
    display: flex;
  }

  .nav-items,
  .nav-items-bavarian-grove {
    width: 100%;
    padding: 0.25rem 1rem;
  }

  .nav-items a,
  .nav-items-bavarian-grove {
    display: block;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    min-height: 44px;
    line-height: 1.4;
  }

  .btn-bavarian-grove {
    display: inline-block;
    margin-top: 0.25rem;
  }
}
</style>
