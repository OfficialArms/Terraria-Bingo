<script setup lang="ts">
defineProps<{
  size: number
}>()
</script>

<template>
  <div class="bingo-board">
    <h1 class="bingo-board-text">The size of the grid is {{ size }}</h1>
  </div>
</template>

<style scoped>

.bingo-board-text {
  text-align: center;
}

</style>
