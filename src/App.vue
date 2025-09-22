<script setup lang="ts">
// Importa componentes necessários
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'

// Referência para o elemento de vídeo
const videoRef = ref<HTMLVideoElement | null>(null)

/**
*****************************************************************************
* Inicializa o vídeo de fundo e define o volume para 0.1 ao carregar a página *
*****************************************************************************
Args:
  Nenhum argumento é necessário.

Returns:
  void: Não retorna valor.

Raises:
  Nenhuma exceção é lançada.
*/
onMounted((): void => {
  // # Define o volume do vídeo para 10% ao montar o componente
  if (videoRef.value) {
    videoRef.value.volume = 0.002
  }
})
</script>

<template>
  <div class="background-video-wrapper">
    <div class="background-blur"></div>
    <!-- Vídeo local como background -->
    <video
      ref="videoRef"
      class="background-video"
      src="@/assets/background.mp4"
      autoplay
      loop
      playsinline
    ></video>
    <div class="background-overlay"></div>

    <RouterView v-slot="{ Component }" class="margin-header">
      <HeaderView style="z-index: 3" />
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style lang="css" scoped>
.background-video-wrapper {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  filter: blur(26px) brightness(0.7);
  object-fit: cover;
}

.background-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  backdrop-filter: blur(26px);
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: rgba(30, 30, 40, 0.753); /* Ajuste a cor conforme o background desejado */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.margin-header {
  position: relative;
  z-index: 3;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
