<script setup lang="ts">
import { onMounted } from "vue";
import json from "../tile-data.json";

const test = json;

onMounted(() => {
  console.log("Imported json data it's: ",test);
})

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

.bingo-board-text {
  text-align: center;
}

</style>
