<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MainView from './components/MainView.vue'

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push({ name: 'sobre' })
  }, 8000) // Redireciona após 8 segundos (8000 milissegundos)
})
</script>

<template>
  <div class="on-center">
    <MainView />
  </div>
</template>

<style lang="css" scoped>
.on-center {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 90px);
  padding: 6px;
  overflow-y: auto;
}
</style>
