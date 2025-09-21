<script setup lang="ts">
import HeaderView from './HeaderView.vue'
</script>

<template>
  <HeaderView />
  <div class="on-center">
    <h1>Ainda sem nada por Aqui</h1>

    <p class="paragraph">
      Enquanto isso, entre na
      <a class="link-bavarian-grove" href="https://linktr.ee/BavarianGrove">nossa comunidade</a>
    </p>
  </div>
</template>

<style lang="css">
.on-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paragraph {
  text-align: center;
  margin-top: 5rem;
  font-weight: bold;
}

.link-bavarian-grove {
  color: #dbd963;
  text-decoration: none;
}

.link-bavarian-grove:hover {
  animation: rainbow 1.5s linear infinite;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
