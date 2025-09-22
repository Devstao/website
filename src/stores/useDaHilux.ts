import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('dentroDaHiluxStore', () => {
  const videoRef = ref<HTMLVideoElement | null>(null)
  function inicializaVolumeVideo(): void {
    if (videoRef.value) {
      videoRef.value.volume = 0
      const targetVolume = 0.0035
      const step = 0.00001
      const interval = setInterval(() => {
        if (videoRef.value && videoRef.value.volume < targetVolume) {
          videoRef.value.volume = Math.min(videoRef.value.volume + step, targetVolume)
        } else {
          clearInterval(interval)
        }
      }, 70) // Ajuste o intervalo conforme necessário
      setTimeout(() => {
        videoRef.value?.play()
      }, 300)
    }
  }

  // # Inicializa o volume ao montar o componente

  // # Reseta o volume toda vez que o vídeo reinicia (evento 'ended' ou 'loop')

  return { inicializaVolumeVideo, videoRef }
})
