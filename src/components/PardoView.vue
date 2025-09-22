<script setup lang="ts">
import pardoAudio1 from '@/assets/audio/pardo.mp3'
import { ref, watch } from 'vue'

const isHovered = ref(false)

const somTocando = ref(false)

watch(isHovered, async () => {
  if (isHovered.value && !somTocando.value) {
    somTocando.value = true
    const audio = new Audio(pardoAudio1)
    audio.play()
    audio.onended = () => {
      somTocando.value = false
    }
  }
})
</script>

<template>
  <span @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="pardo-som">
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
