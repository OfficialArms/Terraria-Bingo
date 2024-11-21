<script setup lang="ts">
import { ref } from 'vue';
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
import { bingoTiles, boardSize, currentRandomSeed } from './global-state';
import { randomizeSeed } from './util/randomization';

const newSeed = ref();

const updateSeed = () => {
  currentRandomSeed.value = newSeed.value;
};
</script>

<template>
  <div class="parent-grid">
    <BingoHeader msg="Terraria Bingo" />
    <div style="display: flex; flex-direction: row">
      <p>Seed: {{ currentRandomSeed }}</p>
      <button @click="randomizeSeed">🎲</button>
    </div>
    <div>
      <label>Set Seed</label>
      <input type="number" v-model.lazy="newSeed" :placeholder="'' + currentRandomSeed" />
      <button @click="updateSeed">Confirm</button>
    </div>
    <BingoBoard class="bingo-board-area" :size="boardSize" :bingo-tiles="bingoTiles" />
  </div>
</template>

<style scoped>
.parent-grid {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('/src/images/background.png');
  background-size: cover;
  color: white;
}
</style>
