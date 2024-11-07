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

.bingo-board {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(v-bind(size), 1fr);
    grid-template-rows: repeat(v-bind(size), 1fr);
    border: 1px solid red;
}

/* .bingo-header-area { 
    grid-area: 1 / 1 / 2 / 6;
}

.bingo-board-area { 
  grid-area: 2 / 2 / 5 / 5; 
  border: 1px solid gray;
} */



.bingo-board-text {
  text-align: center;
}

</style>
