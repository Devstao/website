<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Sobre nós</h1>
      <p class="hero-subtitle">Sem nada por enquanto, volte mais tarde!</p>
      <a href="https://linktr.ee/BavarianGrove" class="hero-cta" target="_blank">
        Entre na comunidade
      </a>
    </div>
  </section>
</template>
<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #fff;
  padding: 2rem;
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
  margin-bottom: 2rem;
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
