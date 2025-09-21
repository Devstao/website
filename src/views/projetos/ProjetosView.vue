<script setup lang="ts">
import MainView from './components/MainView.vue'
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
