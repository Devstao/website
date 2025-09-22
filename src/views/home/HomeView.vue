<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainView from './components/MainView.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()

// onMounted(() => {
//   setTimeout(() => {
//     router.push({ name: 'sobre' })
//   }, 8000)
// })
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
