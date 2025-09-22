<script setup lang="ts">
import pardoAudio1 from '@/assets/audio/pardo.mp3'
import pardoAudio2 from '@/assets/audio/pardo2.mp3'
import pardoAudio3 from '@/assets/audio/pardo3.mp3'
import { ref, watch } from 'vue'

const pardo_audio = [pardoAudio1, pardoAudio2, pardoAudio3]

/**
 * Seleciona aleatoriamente um elemento de uma lista fornecida pelo usuário.
 *
 * Args:
 * lista (Array<T>): Lista de elementos do tipo T para seleção aleatória.
 *
 * Returns:
 * T: Elemento selecionado aleatoriamente da lista fornecida.
 *
 * Raises:
 * Error: Lança erro se a lista estiver vazia.
 */
function selecionarAleatorio<T>(lista: Array<T>): T {
  // Verifica se a lista está vazia
  if (lista.length === 0) {
    throw new Error('A lista não pode estar vazia.')
  }
  // Gera índice aleatório
  const indice: number = Math.floor(Math.random() * lista.length)
  // Retorna elemento aleatório
  return lista[indice]
}

const isHovered = ref(false)

const somTocando = ref(false)

watch(isHovered, async () => {
  if (isHovered.value && !somTocando.value) {
    somTocando.value = true
    const audio = new Audio(selecionarAleatorio(pardo_audio))
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
