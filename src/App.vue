<script setup lang="ts">
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
import { boardSize, bingoTiles, currentRandomSeed, randomizeList } from './global-state'

// const allBingoTiles = json.tasks;
// shuffle(allBingoTiles, currentRandomSeed.value);
// const bingoTiles = ref(allBingoTiles.slice(0, boardSize.value*boardSize.value));

</script>

<template>
  <div class="parent-grid">
      <BingoHeader msg="This is the Terraria Bingo Zone™!"/>
      <p>Seed: {{ currentRandomSeed }}</p>
      <button @click="randomizeList">🎲</button>
      <BingoBoard class="bingo-board-area" :size="boardSize" :bingo-tiles="bingoTiles"/>
  </div>
</template>

<style scoped>
.parent-grid {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/src/images/background.png");
  background-size: cover;
  color: white;
}
</style>
