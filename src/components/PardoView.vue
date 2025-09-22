<script setup lang="ts">
import pardoAudio1 from '@/assets/audio/pardo.mp3'
import pardoAudio2 from '@/assets/audio/pardo2.mp3'
import pardoAudio3 from '@/assets/audio/pardo3.mp3'
import { abrirCanalPardo } from '@/resources'
import { ref } from 'vue'

const isHovered = ref(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const somTocando = ref(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pardo_audio = [pardoAudio1, pardoAudio2, pardoAudio3]

// watch(isHovered, async () => {
//   if (isHovered.value && !somTocando.value) {
//     somTocando.value = true
//     const audio = new Audio(selecionarAleatorio(pardo_audio))
//     audio.volume = 0.5
//     audio.play()

//     audio.onended = () => {
//       somTocando.value = false
//     }
//   }
// })
</script>

<template>
  <span
    @click="abrirCanalPardo"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="pardo-som"
  >
    <slot></slot>
  </span>
</template>

<style>
.pardo-som {
  color: #dbd963;
  text-decoration: none;
}

.pardo-som:hover {
  animation: rainbow 1.5s linear infinite;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  cursor: default;
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
