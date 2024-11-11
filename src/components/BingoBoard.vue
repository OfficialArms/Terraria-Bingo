<script setup lang="ts">
import BingoTile from "./BingoTile.vue";

const props = defineProps<{
  size: number,
  bingoTiles: {task: string, difficulty: number}[]
}>()

</script>

<template>
  <div class="bingo-board">
    <BingoTile v-for="(tile,index) in props.bingoTiles" 
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
  margin: 50px;
  margin-top: 0;
  overflow: auto;
}

</style>
