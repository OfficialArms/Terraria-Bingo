<script setup lang="ts">
import { onMounted } from "vue";
import json from "../tile-data.json";

const props = defineProps<{
  size: number
}>()

// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array:object[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const allBingoTiles = json.tasks;
let trimmedBingoTiles;

onMounted(() => {
  // Randomize the tiles and trim it to the right size
  shuffle(allBingoTiles);
  console.log("All the tiles after the shuffle:",allBingoTiles);
  trimmedBingoTiles = allBingoTiles.slice(0, props.size*props.size);
  console.log("The trimmed Bingo tiles are:", trimmedBingoTiles);
})

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
