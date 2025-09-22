<script setup lang="ts">
import { onMounted, ref } from 'vue'

const paginaVisivel = ref(false)

onMounted(() => {
  setTimeout(() => {
    paginaVisivel.value = true
  }, 200)
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="content2" v-if="paginaVisivel">
      <div class="text-sobre2">
        <h1 class="header-sobre2">O que você encontrar aqui</h1>
        <ul class="paragrafo-sobre2">
          <li>Estudo → materiais, exemplos e práticas para evoluir como dev.</li>
          <li>Networking → conexão entre profissionais e iniciantes da área.</li>
          <li>Troca de experiências → ideias, dúvidas e soluções em conjunto.</li>
          <li>Projetos → desenvolvimento colaborativo de aplicações (open source ou pagos).</li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<style lang="css" scoped>
.content2 {
  margin: 50px;
  display: flex;
  justify-content2: space-between;
  gap: 15px;
  margin-top: 125px;
}

.content2 .text-sobre2 {
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
  padding: 25px;
  height: 100%;
  width: 100%;
}

.text-sobre2 .header-sobre2 {
  font-weight: bold;
  font-size: 3.2rem;
  font-family: 'Times New Roman', Times, serif;
}

.text-sobre2 .paragrafo-sobre2 {
  margin-top: 90px;
  width: 75%;
  font-size: 1.7rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
