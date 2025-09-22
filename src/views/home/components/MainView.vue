<script setup lang="ts">
import PardoView from '@/components/PardoView.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">DEVstão</h1>
      <p class="hero-subtitle">
        Comunidade oficial de desenvolvedores do <PardoView>Renato Impera</PardoView>.<br />
        Estudo, networking e projetos colaborativos para todos.
      </p>
      <RouterLink :to="{ name: 'sobre' }" class="hero-cta"> Sobre o DEVstão </RouterLink>
    </div>
  </section>
</template>
<style lang="css" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #fff;
  padding: 2rem;
  margin-top: 100px;
  margin-bottom: 150px;
}
.hero-content {
  text-align: center;
  max-width: 600px;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}
.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}
.hero-cta {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #b7ca0a;
  color: #272c16;
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s;
}
.hero-cta:hover {
  background: #262909;
  color: #cfcc0a;
}
</style>
