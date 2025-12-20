<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MainView from './components/MainView.vue'

const router = useRouter()
const route = useRoute()
onMounted(() => {
  if (route.name === 'home') {
    setTimeout(() => {
      router.push({ name: 'sobre' })
    }, 15000)
  }
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
