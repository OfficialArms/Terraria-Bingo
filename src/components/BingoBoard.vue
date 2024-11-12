<script setup lang="ts">
import json from "../tile-data.json";
import BingoTile from "./BingoTile.vue";

const props = defineProps<{
  size: number
}>()

// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// TODO: Move this to it's own js file
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

// Get the data from JSON and trim it
const allBingoTiles = json.tasks;
shuffle(allBingoTiles);
const trimmedBingoTiles = allBingoTiles.slice(0, props.size*props.size);

console.log("All the tiles:",allBingoTiles);
console.log("The trimmed Bingo tiles are:", trimmedBingoTiles);

</script>

<template>
  <div class="bingo-board">
    <BingoTile v-for="(tile,index) in trimmedBingoTiles" 
      :key="index"
      :msg="tile.task" 
      :difficulty="tile.difficulty"/>
  </div>
</template>

<style scoped>

.bingo-board {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(size), 1fr);
  grid-template-rows: repeat(v-bind(size), 1fr);
}

</style>
