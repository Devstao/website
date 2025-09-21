<script setup lang="ts">
import SrcPardo from '@/assets/pardo.jpg'
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
    <div class="content" v-if="paginaVisivel">
      <div class="text-sobre">
        <h1 class="header-sobre">Sobre a Comunidade</h1>
        <p class="paragrafo-sobre">
          <span style="font-weight: bold">DEVstão</span> é a organização oficial da comunidade de
          desenvolvedores do <span style="font-weight: bold">Renato Impera</span> (vulgo PARDO). Um
          espaço criado para estudo, networking e desenvolvimento de projetos colaborativos.
        </p>
      </div>

      <div class="image-pardo">
        <img class="src-pardo" :src="SrcPardo" alt="pardo" />
      </div>
    </div>
  </Transition>
</template>

<style lang="css" scoped>
.content {
  margin: 50px;
  margin-top: 150px;

  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.content .image-pardo {
  display: flex; /* Centraliza o conteúdo usando flexbox */
  align-items: center; /* Alinha verticalmente ao centro */
  justify-content: center; /* Alinha horizontalmente ao centro */
  padding: 25px;
  width: 50%; /* Mantém metade do espaço do container */
  height: 100%; /* Garante altura total do container */
  border-radius: 5px;
  background-color: rgba(53, 53, 53, 0.397);
}

.content .image-pardo .src-pardo {
  width: 30%;
  height: auto;
  max-width: 600px;
  border-radius: 5px;
}

.content .text-sobre {
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
  padding: 25px;
  height: 100%;
  width: 50%;
}

.text-sobre .header-sobre {
  font-weight: bold;
  font-size: 3.2rem;
  font-family: 'Times New Roman', Times, serif;
}

.text-sobre .paragrafo-sobre {
  margin-top: 90px;
  width: 75%;
  font-size: 1.3rem;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
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
