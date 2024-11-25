<script setup lang="ts">
import { currentRandomSeed } from '@/global-state'
import BingoTile from './BingoTile.vue'
import { watch } from 'vue'
import { randomizeBoardWithSeed } from '@/util/randomization'

const props = defineProps<{
  size: number
  bingoTiles: { task: string; difficulty: number }[]
}>()

watch(currentRandomSeed, () => randomizeBoardWithSeed(currentRandomSeed.value))

// watch(boardSize, () => {
//   trimmedBingoTiles = allBingoTiles.slice(0, props.size * props.size)
// })
</script>

<template>
  <div class="bingo-board">
    <BingoTile
      v-for="(tile, index) in props.bingoTiles"
      :key="index"
      :msg="tile.task"
      :difficulty="tile.difficulty"
    />
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
