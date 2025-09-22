<script setup lang="ts">
import SrcPardo from '@/assets/pardo.jpg'
import PardoView from '@/components/PardoView.vue'
import { computed, onMounted, ref } from 'vue'

const paginaVisivel = ref(false)

onMounted(() => {
  setTimeout(() => {
    paginaVisivel.value = true
  }, 200)
})

const windowSize = computed(() => window.innerWidth > 768)
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="content" v-if="paginaVisivel">
      <div class="text-sobre">
        <h1 class="header-sobre">Sobre a Comunidade</h1>
        <p class="paragrafo-sobre">
          <span style="font-weight: bold">DEVstão</span> é a organização da comunidade de
          desenvolvedores do <PardoView>Renato Impera</PardoView> (vulgo PARDO). Um espaço criado
          para estudo, networking e desenvolvimento de projetos colaborativos.
        </p>
      </div>

      <div class="image-pardo" v-if="windowSize">
        <img class="src-pardo" :src="SrcPardo" alt="pardo" />
      </div>
    </div>
  </Transition>
</template>

<style lang="css" scoped>
.content {
  margin: 50px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
}

.content .image-pardo {
  display: flex; /* Centraliza o conteúdo usando flexbox */
  align-items: center; /* Alinha verticalmente ao centro */
  justify-content: center; /* Alinha horizontalmente ao centro */
  padding: 25px;
  width: 10%; /* Mantém metade do espaço do container */
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
  text-align: center; /* Centraliza o título em telas menores */
  font-weight: bold;
  font-size: 3.2rem;
  font-family: 'Times New Roman', Times, serif;
}

.text-sobre .paragrafo-sobre {
  margin-top: 90px;
  width: 75%;
  font-size: 1.7rem;
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

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .content .header-sobre {
    font-size: 1.8rem;
  }

  .content .text-sobre {
    width: 90%; /* Ajusta a largura do texto para telas menores */
  }

  .text-sobre .paragrafo-sobre {
    width: 100%; /* O parágrafo ocupa toda a largura disponível */
    font-size: 1rem; /* Ajusta o tamanho da fonte para melhor leitura */
    padding: 0 10px;
  }
}
</style>
